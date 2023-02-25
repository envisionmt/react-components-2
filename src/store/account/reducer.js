import {
  UPDATE_FINANCIAL_INFORMATION_REQUEST,
  UPDATE_FINANCIAL_INFORMATION_SUCCESS,
  UPDATE_FINANCIAL_INFORMATION_FAILURE,
  REDEEM_COUPON_CODE_REQUEST,
  REDEEM_COUPON_CODE_SUCCESS,
  REDEEM_COUPON_CODE_FAILURE,
} from './constants';

const initialState = { loading: false, errors: [], data: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FINANCIAL_INFORMATION_REQUEST:
      return { ...state, loading: true };
    case UPDATE_FINANCIAL_INFORMATION_SUCCESS:
      return { ...state, loading: false, errors: [] };
    case UPDATE_FINANCIAL_INFORMATION_FAILURE:
      return { ...state, loading: false, errors: action.errors };
    case REDEEM_COUPON_CODE_REQUEST:
      return { ...state, loading: true };
    case REDEEM_COUPON_CODE_SUCCESS:
      return { ...state, loading: false, data: action.payload, errors: [] };
    case REDEEM_COUPON_CODE_FAILURE:
      return { ...state, loading: false, errors: action.errors };
    default:
      return state;
  }
};

export default reducer;
