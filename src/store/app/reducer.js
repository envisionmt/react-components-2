import {
  AUTHENTICATE_REQUEST,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_FAILURE,
  SET_IMPERSONATING,
  LOGOUT,
  OPEN_MODAL,
  CLOSE_MODAL,
  TOGGLE_MODAL,
} from './constants';

const initialState = {
  authenticated: false,
  impersonating: false,
  modalOpen: false,
  currentModal: null,
  modalParams: {},
  modalWidth: '',
  loading: false,
  errors: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE_REQUEST:
      return { ...state, loading: true };
    case AUTHENTICATE_SUCCESS:
      return { ...state, loading: false, authenticated: true, errors: [] };
    case AUTHENTICATE_FAILURE:
      return { ...state, loading: false, errors: action.errors };
    case SET_IMPERSONATING:
      return { ...state, impersonating: action.payload };
    case LOGOUT:
      return { ...state, loading: false, authenticated: false, errors: [] };
    case OPEN_MODAL:
      return {
        ...state,
        modalOpen: true,
        currentModal: action.payload.modal,
        modalParams: action.payload.params,
        modalWidth: action.payload.modalWidth,
      };
    case CLOSE_MODAL:
      return { ...state, modalOpen: false, currentModal: null, params: {} };
    case TOGGLE_MODAL:
      return { ...state, modalOpen: !state.modalOpen };
    default:
      return state;
  }
};

export default reducer;
