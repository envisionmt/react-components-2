import {
  START_YOURNFT_UPLOAD,
  CREATE_YOURNFT_UPLOAD,
  COMPLETE_YOURNFT_UPLOAD,
  FINALIZE_YOURNFT_UPLOAD,
  YOURNFT_UPLOAD_FAILURE,
  ADD_YOURNFT_FILE,
  YOURNFT_UPLOAD_PROGRESS,
  YOURNFT_UPLOAD_CANCEL,
  YOURNFT_UPLOAD_ABORTED,
  SET_YOURNFT_ASPECT_RATIO,
} from './constants';

const initialState = {
  file: null,
  previewURL: null,
  aspectRatio: null,
  upload: {},
  chunks: [],
  progress: {},
  transferComplete: false,
  canceled: false,
  aborted: false,
  uploading: false,
  errors: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_YOURNFT_FILE:
      return {
        ...state,
        file: action.payload,
        previewURL: URL.createObjectURL(action.payload),
        transferComplete: false,
        aborted: false,
        canceled: false,
        uploading: false,
        upload: {},
        chunks: [],
        progress: {},
        errors: [],
      };
    case START_YOURNFT_UPLOAD:
      return { ...state, uploading: true };
    case CREATE_YOURNFT_UPLOAD:
      return { ...state, upload: action.payload };
    case COMPLETE_YOURNFT_UPLOAD:
      return { ...state, chunks: action.payload, errors: [], transferComplete: true };
    case FINALIZE_YOURNFT_UPLOAD:
      return { ...state, uploading: false, upload: {}, errors: [], chunks: [], progress: {}, transferComplete: false };
    case YOURNFT_UPLOAD_FAILURE:
      return { ...state, uploading: false, errors: action.errors, previewURL: null };
    case YOURNFT_UPLOAD_PROGRESS:
      return { ...state, progress: action.payload };
    case YOURNFT_UPLOAD_CANCEL:
      return { ...state, canceled: true };
    case YOURNFT_UPLOAD_ABORTED:
      return { ...state, aborted: true, file: null, previewURL: null };
    case SET_YOURNFT_ASPECT_RATIO:
      return { ...state, aspectRatio: action.payload };
    default:
      return state;
  }
};

export default reducer;
