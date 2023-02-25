import { envisionClient } from '@envision/utils';

import {
  CREATE_SUBSCRIPTION_REQUEST,
  CREATE_SUBSCRIPTION_SUCCESS,
  CREATE_SUBSCRIPTION_FAILURE,
  FETCH_SUBSCRIPTION_REQUEST,
  FETCH_SUBSCRIPTION_SUCCESS,
  FETCH_SUBSCRIPTION_FAILURE,
} from './constants';

const createSubscriptionRequest = () => ({ type: CREATE_SUBSCRIPTION_REQUEST });
const createSubscriptionSuccess = (payload) => ({ type: CREATE_SUBSCRIPTION_SUCCESS, payload });
const createSubscriptionFailure = (errors) => ({ type: CREATE_SUBSCRIPTION_FAILURE, errors });

export const createSubscription = (userId, subId, params) => async (dispatch) => {
  dispatch(createSubscriptionRequest());
  try {
    const response = await envisionClient.post(`/users/${userId}/subscriptions/${subId}`, { ...params });
    if (response.status === 200) {
      return dispatch(createSubscriptionSuccess(response.data));
    }
    return dispatch(createSubscriptionFailure(response.data.message));
  } catch (e) {
    return dispatch(createSubscriptionFailure(e));
  }
};

const fetchSubscriptionRequest = () => ({ type: FETCH_SUBSCRIPTION_REQUEST });
const fetchSubscriptionSuccess = (payload) => ({ type: FETCH_SUBSCRIPTION_SUCCESS, payload });
const fetchSubscriptionFailure = (errors) => ({ type: FETCH_SUBSCRIPTION_FAILURE, errors });

export const fetchSubscription = (userId) => async (dispatch) => {
  dispatch(fetchSubscriptionRequest());
  try {
    const response = await envisionClient.get(`/users/${userId}/subscriptions`);
    if (response.status === 200) {
      return dispatch(fetchSubscriptionSuccess(response.data));
    }
    return dispatch(fetchSubscriptionFailure(response.data.message));
  } catch (e) {
    return dispatch(fetchSubscriptionFailure(e));
  }
};
