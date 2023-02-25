import { envisionClient } from '@envision/utils';

import {
  FORGOT_USER_REQUEST,
  FORGOT_USER_SUCCESS,
  FORGOT_USER_FAILURE,
  RESET_USER_REQUEST,
  RESET_USER_SUCCESS,
  RESET_USER_FAILURE,
} from './constants';

const forgotUserRequest = () => ({ type: FORGOT_USER_REQUEST });
const forgotUserSuccess = (payload) => ({ type: FORGOT_USER_SUCCESS, payload });
const forgotUserFailure = (errors) => ({ type: FORGOT_USER_FAILURE, errors });

export const forgotPassword = (params) => async (dispatch) => {
  dispatch(forgotUserRequest());
  try {
    const response = await envisionClient.post('/forgot', params, true);
    if (response.status === 200) {
      return dispatch(forgotUserSuccess(response.data));
    }
    return dispatch(forgotUserFailure(response.data.message));
  } catch (e) {
    return dispatch(forgotUserFailure(e));
  }
};

const resetUserRequest = () => ({ type: RESET_USER_REQUEST });
const resetUserSuccess = (payload) => ({ type: RESET_USER_SUCCESS, payload });
const resetUserFailure = (errors) => ({ type: RESET_USER_FAILURE, errors });

export const resetPassword = (query, params) => async (dispatch) => {
  dispatch(resetUserRequest());
  try {
    const response = await envisionClient.post(`/forgot/token/${query}`, params, true);
    if (response.status === 200) {
      return dispatch(resetUserSuccess(response.data));
    }
    return dispatch(resetUserFailure(response.data.message));
  } catch (e) {
    return dispatch(resetUserFailure(e));
  }
};
