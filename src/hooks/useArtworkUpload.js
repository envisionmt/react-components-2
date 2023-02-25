import { useState } from 'react';

import { ArtworkUploader } from '../util/ArtworkUploader';

export function useArtworkUpload() {
  const [artworkUploader, setArtworkUploader] = useState(null);
  const [progress, setProgress] = useState({ total: 0, loaded: 0, speed: 0 });
  const [fileDetails, setFileDetails] = useState({ sourceFileId: null, fileName: null });
  const [isStarted, setIsStarted] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isCanceled, setIsCanceled] = useState(false);

  const selectFile = async (file) => {
    if (artworkUploader) artworkUploader.destroy();
    const uploader = new ArtworkUploader();
    setArtworkUploader(uploader);

    uploader.uploadFile(file, {
      onStart: () => {
        setIsStarted(true);
      },
      onTransferStart: () => {
        setIsUploading(true);
      },
      onTransferProgress: (uploadProgress) => {
        setProgress({ total: uploadProgress.total, loaded: uploadProgress.loaded, speed: uploadProgress.smoothSpeed });
      },
      onTransferComplete: (uploadProgress) => {
        setProgress({ total: uploadProgress.total, loaded: uploadProgress.loaded, speed: uploadProgress.smoothSpeed });
        setIsUploading(false);
        setIsPending(true);
      },
      onComplete: (uploadDetails) => {
        setFileDetails(uploadDetails);
        setIsPending(false);
        setIsComplete(true);
      },
      onCancel: () => {
        setIsStarted(false);
        setIsUploading(false);
        setIsPending(false);
        setIsComplete(false);
        setIsCanceled(true);
      },
    });
  };

  const finalizeFile = async (rotation = false) => {
    return artworkUploader.finalizeUpload(rotation);
  };

  return { selectFile, finalizeFile, isStarted, isUploading, isPending, isComplete, isCanceled, progress, fileDetails };
}
