import { OPEN_DEVICE_MENU, CLOSE_DEVICE_MENU, TOGGLE_DEVICE_MENU } from './constants';

export const openDeviceMenu = (payload) => ({ type: OPEN_DEVICE_MENU, payload });
export const closeDeviceMenu = () => ({ type: CLOSE_DEVICE_MENU });
export const toggleDeviceMenu = () => ({ type: TOGGLE_DEVICE_MENU });
