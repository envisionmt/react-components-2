import { envisionClient } from '@envision/utils';
import {
  FETCH_DIGITAL_CANVAS_DATA_REQUEST,
  FETCH_DIGITAL_CANVAS_DATA_SUCCESS,
  FETCH_DIGITAL_CANVAS_DATA_FAILED,
} from './constants';

const fetchDigitalCanvasDataRequest = () => ({ type: FETCH_DIGITAL_CANVAS_DATA_REQUEST });
const fetchDigitalCanvasDataSuccess = (payload) => ({ type: FETCH_DIGITAL_CANVAS_DATA_SUCCESS, payload });
const fetchDigitalCanvasDataFailure = (errors) => ({ type: FETCH_DIGITAL_CANVAS_DATA_FAILED, errors });

export const fetchDigitalCanvas = () => async (dispatch) => {
  dispatch(fetchDigitalCanvasDataRequest());
  try {
    const response = await envisionClient.get(`/ecommerce/digitalcanvas`, null, true);
    if (response.status === 200) {
      return dispatch(fetchDigitalCanvasDataSuccess(response.data));
    }
    return dispatch(fetchDigitalCanvasDataFailure(response.data.message));
  } catch (e) {
    return dispatch(fetchDigitalCanvasDataFailure(e));
  }
};
