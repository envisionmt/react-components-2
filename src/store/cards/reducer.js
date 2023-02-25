import {
  FETCH_CARDS_REQUEST,
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_FAILURE,
  CREATE_CARD_REQUEST,
  CREATE_CARD_SUCCESS,
  CREATE_CARD_FAILURE,
  DELETE_CARD_REQUEST,
  DELETE_CARD_SUCCESS,
  DELETE_CARD_FAILURE,
} from './constants';

const initialState = { data: [], loading: false, errors: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARDS_REQUEST:
      return { ...state, loading: true };
    case FETCH_CARDS_SUCCESS:
      return { ...state, loading: false, data: action.payload, errors: [] };
    case FETCH_CARDS_FAILURE:
      return { ...state, loading: false, errors: action.errors };
    case CREATE_CARD_REQUEST:
      return { ...state, loading: true };
    case CREATE_CARD_SUCCESS:
      return { ...state, loading: false, data: [...state.data, action.payload], errors: [] };
    case CREATE_CARD_FAILURE:
      return { ...state, loading: false, errors: action.errors };
    case DELETE_CARD_REQUEST:
      return { ...state, loading: true };
    case DELETE_CARD_SUCCESS:
      return { ...state, loading: false, data: state.data.filter((card) => card.id !== action.payload.id), errors: [] };
    case DELETE_CARD_FAILURE:
      return { ...state, loading: false, errors: action.errors };
    default:
      return state;
  }
};

export default reducer;
