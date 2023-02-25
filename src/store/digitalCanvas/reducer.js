import {
  FETCH_DIGITAL_CANVAS_DATA_REQUEST,
  FETCH_DIGITAL_CANVAS_DATA_SUCCESS,
  FETCH_DIGITAL_CANVAS_DATA_FAILED,
} from './constants';

const initialState = { data: [], loading: false, errors: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DIGITAL_CANVAS_DATA_REQUEST:
      return { ...state, loading: true };
    case FETCH_DIGITAL_CANVAS_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload, errors: [] };
    case FETCH_DIGITAL_CANVAS_DATA_FAILED:
      return { ...state, loading: false, errors: action.errors };
    default:
      return state;
  }
};

export default reducer;
