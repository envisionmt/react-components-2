import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import { envisionClient } from '@envision/utils';

import {
  START_YOURNFT_UPLOAD,
  CREATE_YOURNFT_UPLOAD,
  COMPLETE_YOURNFT_UPLOAD,
  FINALIZE_YOURNFT_UPLOAD,
  YOURNFT_UPLOAD_FAILURE,
  ADD_YOURNFT_FILE,
  YOURNFT_UPLOAD_PROGRESS,
  YOURNFT_UPLOAD_CANCEL,
  SET_YOURNFT_ASPECT_RATIO,
} from './constants';

const FILE_CHUNK_SIZE = 100_000_000;

export const addYourNFTFile = (payload) => ({ type: ADD_YOURNFT_FILE, payload });
export const cancelYourNFTUpload = () => ({ type: YOURNFT_UPLOAD_CANCEL });

const startYourNFTUpload = () => ({ type: START_YOURNFT_UPLOAD });

const createYourNFTUpload = (payload) => ({ type: CREATE_YOURNFT_UPLOAD, payload });
const completeYourNFTUpload = (payload) => ({ type: COMPLETE_YOURNFT_UPLOAD, payload });
const finalizeYourNFTUploadSuccess = () => ({ type: FINALIZE_YOURNFT_UPLOAD });

const yourNFTUploadFailure = (errors) => ({ type: YOURNFT_UPLOAD_FAILURE, errors });
const yourNFTUploadProgress = (payload) => ({ type: YOURNFT_UPLOAD_PROGRESS, payload });

export const uploadYourNFT = (file) => async (dispatch) => {
  try {
    dispatch(startYourNFTUpload());
    const extension = file.name.split('.').pop();
    const sourceFileId = uuidv4();
    const fileName = `${sourceFileId}.${extension}`;

    const response = await envisionClient.post('/upload/new', { fileName, fileSize: file.size });

    const { uploadId, presignedUrls } = response.data;

    dispatch(
      createYourNFTUpload({
        sourceFileId,
        extension,
        fileName,
        uploadId,
        uploadUrls: presignedUrls,
      })
    );

    // Setup Axios
    const axios = Axios.create();
    delete axios.defaults.headers.put['Content-Type'];

    const progressArray = [];

    const promises = presignedUrls.map((part, i) => {
      const start = i * FILE_CHUNK_SIZE;
      const end = (i + 1) * FILE_CHUNK_SIZE;
      const blob = i < presignedUrls.length ? file.slice(start, end) : file.slice(start);

      progressArray[i] = 0;
      return axios.put(part, blob, {
        onUploadProgress: (progressEvent) => {
          progressArray[i] = progressEvent.loaded;
        },
      });
    });

    // Update the progress every 100ms to help smooth out the ETA
    const progressInterval = setInterval(() => {
      const totalLoaded = progressArray.reduce((total, current) => total + current, 0);
      dispatch(yourNFTUploadProgress({ current: totalLoaded, total: file.size }));
    }, 100);

    const results = await Promise.all(promises);

    clearInterval(progressInterval);

    const parts = results.map((result, i) => ({ ETag: result.headers.etag, PartNumber: i + 1 }));

    dispatch(completeYourNFTUpload(parts));
  } catch (e) {
    dispatch(yourNFTUploadFailure(e));
  }
};

export const finalizeYourNFTUpload = (data) => async (dispatch, getState) => {
  try {
    const state = getState();
    const {
      upload: { uploadId, fileName, sourceFileId },
      chunks,
    } = state.yourNFT;
    const response = await envisionClient.post(
      '/userUploads',
      {
        uploadId,
        parts: chunks,
        fileName,
        sourceFileId,
        title: data.title,
        userId: data.userId,
      },
      false,
      100000
    );

    if (response.status === 201) {
      return dispatch(finalizeYourNFTUploadSuccess());
    }

    return dispatch(yourNFTUploadFailure(response.data.message));
  } catch (e) {
    return dispatch(yourNFTUploadFailure(e));
  }
};

export const setYourNFTAspectRatio = (payload) => ({ type: SET_YOURNFT_ASPECT_RATIO, payload });
