import { envisionClient } from '@envision/utils';

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

const fetchCardsRequest = () => ({ type: FETCH_CARDS_REQUEST });
const fetchCardsSuccess = (payload) => ({ type: FETCH_CARDS_SUCCESS, payload });
const fetchCardsFailure = (errors) => ({ type: FETCH_CARDS_FAILURE, errors });

export const fetchCards = (userId) => async (dispatch) => {
  dispatch(fetchCardsRequest());
  try {
    const response = await envisionClient.get(`/users/${userId}/cards`);
    if (response.status === 200) {
      return dispatch(fetchCardsSuccess(response.data));
    }
    return dispatch(fetchCardsFailure(response.data.message));
  } catch (e) {
    return dispatch(fetchCardsFailure(e));
  }
};

const deleteCardRequest = () => ({ type: DELETE_CARD_REQUEST });
const deleteCardSuccess = (payload) => ({ type: DELETE_CARD_SUCCESS, payload });
const deleteCardFailure = (errors) => ({ type: DELETE_CARD_FAILURE, errors });

export const deleteCard = (userId, cardId) => async (dispatch) => {
  dispatch(deleteCardRequest());
  try {
    const response = await envisionClient.delete(`/users/${userId}/cards/${cardId}`);
    if (response.status === 200) {
      return dispatch(deleteCardSuccess(response.data));
    }
    return dispatch(deleteCardFailure(response.data.message));
  } catch (e) {
    return dispatch(deleteCardFailure(e));
  }
};

const createCardRequest = () => ({ type: CREATE_CARD_REQUEST });
const createCardSuccess = (payload) => ({ type: CREATE_CARD_SUCCESS, payload });
const createCardFailure = (errors) => ({ type: CREATE_CARD_FAILURE, errors });

export const createCard = (userId, params) => async (dispatch) => {
  dispatch(createCardRequest());
  try {
    const response = await envisionClient.post(`/users/${userId}/cards`, params);
    if (response.status === 200) {
      return dispatch(createCardSuccess(response.data));
    }
    return dispatch(createCardFailure(response.data.message));
  } catch (e) {
    return dispatch(createCardFailure(e));
  }
};
