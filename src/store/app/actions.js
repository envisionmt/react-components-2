import { envisionClient } from '@envision/utils';

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

const authenticateRequest = () => ({ type: AUTHENTICATE_REQUEST });
const authenticateSuccess = (payload) => ({ type: AUTHENTICATE_SUCCESS, payload });
const authenticateFailure = (errors) => ({ type: AUTHENTICATE_FAILURE, errors });

export const authenticate = (params) => async (dispatch) => {
  dispatch(authenticateRequest());
  try {
    const response = await envisionClient.authenticate(params.username, params.password);
    if (response?.accessToken) {
      return dispatch(authenticateSuccess(response));
    }
    return dispatch(authenticateFailure('Failed to log in'));
  } catch (e) {
    return dispatch(authenticateFailure(e));
  }
};

export const setAuthenticated = () => ({ type: AUTHENTICATE_SUCCESS });

export const setImpersonating = (payload) => ({ type: SET_IMPERSONATING, payload });

export const logout = () => ({ type: LOGOUT });

export const openModal = (payload) => ({ type: OPEN_MODAL, payload });
export const closeModal = () => ({ type: CLOSE_MODAL });
export const toggleModal = () => ({ type: TOGGLE_MODAL });
