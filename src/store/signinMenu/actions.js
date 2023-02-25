import { OPEN_SIGNIN_MENU, CLOSE_SIGNIN_MENU, TOGGLE_SIGNIN_MENU } from './constants';

export const openSigninMenu = (payload) => ({ type: OPEN_SIGNIN_MENU, payload });
export const closeSigninMenu = () => ({ type: CLOSE_SIGNIN_MENU });
export const toggleSigninMenu = () => ({ type: TOGGLE_SIGNIN_MENU });
