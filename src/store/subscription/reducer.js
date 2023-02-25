import {
  FETCH_SUBSCRIPTION_REQUEST,
  FETCH_SUBSCRIPTION_SUCCESS,
  FETCH_SUBSCRIPTION_FAILURE,
  CREATE_SUBSCRIPTION_REQUEST,
  CREATE_SUBSCRIPTION_SUCCESS,
  CREATE_SUBSCRIPTION_FAILURE,
} from './constants';

const initialState = { data: {}, loading: false, errors: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUBSCRIPTION_REQUEST:
      return { ...state, loading: true };
    case FETCH_SUBSCRIPTION_SUCCESS:
      return { ...state, loading: false, data: action.payload, errors: [] };
    case FETCH_SUBSCRIPTION_FAILURE:
      return { ...state, loading: false, errors: action.errors };
    case CREATE_SUBSCRIPTION_REQUEST:
      return { ...state, loading: true };
    case CREATE_SUBSCRIPTION_SUCCESS:
      return { ...state, loading: false, data: action.payload, errors: [] };
    case CREATE_SUBSCRIPTION_FAILURE:
      return { ...state, loading: false, errors: action.errors };
    default:
      return state;
  }
};

export default reducer;
