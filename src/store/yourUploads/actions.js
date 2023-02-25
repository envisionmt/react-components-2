import { envisionClient } from '@envision/utils';

import { LOAD_YOUR_UPLOADS, COMPLETE_LOAD_YOUR_UPLOADS, FAILED_LOAD_YOUR_UPLOADS } from './constants';

const loadYourUploads = () => ({ type: LOAD_YOUR_UPLOADS });
const completeLoadYourUploads = (payload) => ({ type: COMPLETE_LOAD_YOUR_UPLOADS, payload });
const failedLoadYourUploads = (payload) => ({ type: FAILED_LOAD_YOUR_UPLOADS, payload });

export const startLoadYourUploads = () => async (dispatch) => {
  try {
    dispatch(loadYourUploads());

    const { status, data } = await envisionClient.get(`/userUploads`, null, false, 100000);
    if (status === 200) {
      return dispatch(completeLoadYourUploads(data));
    }

    return dispatch(failedLoadYourUploads(data.message));
  } catch (e) {
    return dispatch(failedLoadYourUploads(e));
  }
};
