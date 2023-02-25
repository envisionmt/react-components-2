import { envisionClient } from '@envision/utils';
import {
  OPEN_CHECKOUT_CART_SIDE_NAV,
  CLOSE_CHECKOUT_CART_SIDE_NAV,
  TOGGLE_CHECKOUT_CART_SIDE_NAV,
  CHECKOUT_CART_REQUEST,
  CHECKOUT_CART_SUCCESS,
  CHECKOUT_CART_FAILURE,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  UPDATE_CART_ITEM,
} from './constants';

export const openCheckoutCartSideNavigation = () => (dispatch) => {
  dispatch({ type: OPEN_CHECKOUT_CART_SIDE_NAV });
};
export const closeCheckoutCartSideNavigation = () => (dispatch) => {
  dispatch({ type: CLOSE_CHECKOUT_CART_SIDE_NAV });
};
export const toggleCheckoutCartSideNavigation = () => (dispatch) => {
  dispatch({ type: TOGGLE_CHECKOUT_CART_SIDE_NAV });
};
export const addCartItem = (payload) => ({ type: ADD_CART_ITEM, payload });
export const removeCartItem = (payload) => ({ type: REMOVE_CART_ITEM, payload });
export const updateCartItem = (payload) => ({ type: UPDATE_CART_ITEM, payload });

const fetchCheckoutRequest = () => ({ type: CHECKOUT_CART_REQUEST });
const fetchCheckoutSuccess = (payload) => ({ type: CHECKOUT_CART_SUCCESS, payload });
const fetchCheckoutFailure = (errors) => ({ type: CHECKOUT_CART_FAILURE, errors });

export const checkoutCart = (payload) => async (dispatch) => {
  dispatch(fetchCheckoutRequest());
  try {
    const response = await envisionClient.post(`/digitalcanvas/checkout`, payload, true);
    if (response.status === 200) {
      return dispatch(fetchCheckoutSuccess(response.data));
    }
    return dispatch(fetchCheckoutFailure(response.data.message));
  } catch (e) {
    return dispatch(fetchCheckoutFailure(e));
  }
};
