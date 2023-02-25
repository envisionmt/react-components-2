import {
  FORGOT_USER_REQUEST,
  FORGOT_USER_SUCCESS,
  FORGOT_USER_FAILURE,
  RESET_USER_REQUEST,
  RESET_USER_SUCCESS,
  RESET_USER_FAILURE,
} from './constants';

const initialState = { data: {}, loading: false, errors: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_USER_REQUEST:
      return { ...state, loading: true };
    case FORGOT_USER_SUCCESS:
      return { ...state, loading: false };
    case FORGOT_USER_FAILURE:
      return { ...state, loading: false, errors: action.errors };
    case RESET_USER_REQUEST:
      return { ...state, loading: true };
    case RESET_USER_SUCCESS:
      return { ...state, loading: false };
    case RESET_USER_FAILURE:
      return { ...state, loading: false, errors: action.errors };
    default:
      return state;
  }
};

export default reducer;
