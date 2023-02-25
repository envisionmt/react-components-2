import { v4 as uuidv4 } from 'uuid';
import Axios from 'axios';
import { envisionClient } from '@envision/utils';

export class ArtworkUploader {
  constructor() {
    this.selected = null;
    this.progressInterval = null;

    this.callbacks = {
      onStart: () => {},
      onTransferStart: () => {},
      onTransferProgress: () => {},
      onTransferComplete: () => {},
      onComplete: () => {},
      onCancel: () => {},
    };

    this.pending = {
      sourceFileId: null,
      extension: null,
      fileName: null,
      uploadId: null,
      presignedUrls: [],
      promises: [],
      cancelTokens: [],
      chunks: [],
    };

    this.uploadProgress = {
      rawProgress: [],
      loaded: 0,
      total: 0,
      speedSamples: [],
      speed: 0,
      smoothSpeed: 0,
    };
  }

  static FILE_CHUNK_SIZE = 50_000_000; // 50MB

  static SMOOTHING_FACTOR = 0.005; // Smoothing factor for current speed calc.

  // Passed in callbacks are...
  // - onStart -- Fired when we start creating the multipart upload.
  // - onTransferStart -- Fired when we set up axios and start chunk transfers.
  // - onTransferProgress -- Fired periodically to update transfer progress.
  // - onTransferComplete -- Fired when the transfer is complete.
  // - onComplete -- Fired when the upload is finalized.
  // - onCancel -- Fired when the upload is canceled.
  async uploadFile(file, callbacks) {
    this.callbacks = { ...this.callbacks, ...callbacks };
    this.selected = file;
    await this.createMultipartUpload();
    await this.startUpload();
  }

  async finalizeUpload(rotation) {
    await this.completeMultipartUpload(rotation);
    return { sourceFileId: this.pending.sourceFileId, fileName: this.pending.fileName };
  }

  async startUpload() {
    this.callbacks.onTransferStart(); // Alert that we are starting the transfer.
    const axios = Axios.create();
    delete axios.defaults.headers.put['Content-Type'];

    // Create all of our axios promises to start the upload.
    this.pending.promises = this.pending.presignedUrls.map((chunk, i) => {
      const start = i * ArtworkUploader.FILE_CHUNK_SIZE;
      const end = (i + 1) * ArtworkUploader.FILE_CHUNK_SIZE;
      const blob = i < this.pending.presignedUrls.length ? this.selected.slice(start, end) : this.selected.slice(start);

      this.uploadProgress.rawProgress[i] = 0;
      this.pending.cancelTokens[i] = Axios.CancelToken.source();
      return axios.put(chunk, blob, {
        cancelToken: this.pending.cancelTokens[i].token,
        onUploadProgress: (progressEvent) => {
          this.uploadProgress.rawProgress[i] = progressEvent.loaded;
        },
      });
    });

    this.progressInterval = this.createProgressInterval();
    const results = await Promise.all(this.pending.promises);
    this.pending.chunks = results.map((res, i) => ({ ETag: res.headers.etag, PartNumber: i + 1 }));
    clearInterval(this.progressInterval);
    this.callbacks.onTransferComplete(this.uploadProgress);
  }

  // Creates the multipart upload and gets back presigned urls to use for the direct S3 transfer.
  async createMultipartUpload() {
    this.callbacks.onStart(); // Alert that we are starting
    const extension = this.selected.name.split('.').pop();
    const sourceFileId = uuidv4();
    const fileName = `${sourceFileId}.${extension.toLowerCase()}`;

    // Create the new multipart upload
    const result = await envisionClient.post('/v2/uploads/new', { fileName, fileSize: this.selected.size });
    const { uploadId, presignedUrls } = result.data;

    this.pending = { ...this.pending, sourceFileId, extension, fileName, uploadId, presignedUrls };
    this.uploadProgress.total = this.selected.size;
  }

  async completeMultipartUpload(rotation) {
    const { uploadId, chunks, fileName } = this.pending;
    await envisionClient.post('/v2/uploads/complete', { uploadId, chunks, fileName, rotate: rotation });
    this.callbacks.onComplete({ sourceFileId: this.pending.sourceFileId, fileName: this.pending.fileName });
  }

  // Creates a progress inteval to smoothly update the progress of the upload.
  createProgressInterval() {
    return setInterval(() => {
      let totalLoaded = 0;
      for (let i = 0; i < Object.keys(this.uploadProgress.rawProgress).length; i += 1) {
        totalLoaded += this.uploadProgress.rawProgress[i];
      }

      // We are running twice per second so we need to multiply by 2 to get the proper bytes per second.
      const currentSpeed = (totalLoaded - this.uploadProgress.loaded) * 4;

      const speedSamples = this.uploadProgress.speedSamples.slice();
      if (speedSamples.length >= 15) speedSamples.shift();
      speedSamples.push(currentSpeed);

      const average =
        speedSamples.reduce((total, current) => total + current, 0) / this.uploadProgress.speedSamples.length;
      const smoothed =
        average > 0
          ? ArtworkUploader.SMOOTHING_FACTOR * currentSpeed + (1 - ArtworkUploader.SMOOTHING_FACTOR) * average
          : 1;

      this.uploadProgress.speedSamples = speedSamples;
      this.uploadProgress.loaded = totalLoaded;
      this.uploadProgress.speed = average;
      this.uploadProgress.smoothSpeed = smoothed;
      this.callbacks.onTransferProgress(this.uploadProgress);
    }, 250);
  }

  destroy() {
    // Clear our progress interval;
    clearInterval(this.progressInterval);

    // Cancel all chunk requests.
    for (let i = 0; i < this.pending.cancelTokens.length; i += 1) {
      this.pending.cancelTokens[i].cancel();
    }

    this.callbacks.onCancel();
  }
}
