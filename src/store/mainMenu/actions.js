import { OPEN_MAIN_MENU, CLOSE_MAIN_MENU, TOGGLE_MAIN_MENU } from './constants';

export const openMainMenu = () => ({ type: OPEN_MAIN_MENU });
export const closeMainMenu = () => ({ type: CLOSE_MAIN_MENU });
export const toggleMainMenu = () => ({ type: TOGGLE_MAIN_MENU });
