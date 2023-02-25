import { envisionClient } from '@envision/utils';

import {
  UPDATE_FINANCIAL_INFORMATION_REQUEST,
  UPDATE_FINANCIAL_INFORMATION_SUCCESS,
  UPDATE_FINANCIAL_INFORMATION_FAILURE,
  REDEEM_COUPON_CODE_REQUEST,
  REDEEM_COUPON_CODE_SUCCESS,
  REDEEM_COUPON_CODE_FAILURE,
} from './constants';

const updateFiancialInformationRequest = () => ({ type: UPDATE_FINANCIAL_INFORMATION_REQUEST });
const updateFiancialInformationSuccess = () => ({ type: UPDATE_FINANCIAL_INFORMATION_SUCCESS });
const updateFiancialInformationFailure = (errors) => ({ type: UPDATE_FINANCIAL_INFORMATION_FAILURE, errors });

export const updateFiancialInformation = (userId, params) => async (dispatch) => {
  dispatch(updateFiancialInformationRequest());
  try {
    const response = await envisionClient.post(`/artists/${userId}/updateFinancialInformation`, params);
    if (response.status === 200) {
      return dispatch(updateFiancialInformationSuccess());
    }
    return dispatch(updateFiancialInformationFailure('error'));
  } catch (e) {
    return dispatch(updateFiancialInformationFailure(e));
  }
};

const redeemCouponCodeRequest = () => ({ type: REDEEM_COUPON_CODE_REQUEST });
const redeemCouponCodeSuccess = (payload) => ({ type: REDEEM_COUPON_CODE_SUCCESS, payload });
const redeemCouponCodeFailure = (errors) => ({ type: REDEEM_COUPON_CODE_FAILURE, errors });

export const redeemCouponCode = (userId, couponCode) => async (dispatch) => {
  dispatch(redeemCouponCodeRequest());
  try {
    const response = await envisionClient.post(`/users/${userId}/coupons`, { code: couponCode });
    if (response.status === 200) {
      return dispatch(redeemCouponCodeSuccess(response.body));
    }
    return dispatch(redeemCouponCodeFailure(response.body.message));
  } catch (e) {
    return dispatch(redeemCouponCodeFailure(e));
  }
};
