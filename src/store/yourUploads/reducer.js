import { LOAD_YOUR_UPLOADS, COMPLETE_LOAD_YOUR_UPLOADS, FAILED_LOAD_YOUR_UPLOADS } from './constants';

const initialState = {
  loading: false,
  artworks: {},
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_YOUR_UPLOADS:
      return { loading: true, artworks: {}, error: '' };
    case COMPLETE_LOAD_YOUR_UPLOADS:
      return { loading: false, artworks: action.payload, error: '' };
    case FAILED_LOAD_YOUR_UPLOADS:
      return { ...state, loading: false, errors: action.error };
    default:
      return state;
  }
};

export default reducer;
