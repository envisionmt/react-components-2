import { combineReducers } from 'redux';

import app from './store/app/reducer';
import mainMenu from './store/mainMenu/reducer';
import deviceMenu from './store/deviceMenu/reducer';
import signinMenu from './store/signinMenu/reducer';
import user from './store/user/reducer';
import subscription from './store/subscription/reducer';
import cards from './store/cards/reducer';
import account from './store/account/reducer';
import yourNFT from './store/yourNFT/reducer';
import yourUploads from './store/yourUploads/reducer';
import checkout from './store/checkout/reducer';
import digitalCanvas from './store/digitalCanvas/reducer';

const rootReducer = combineReducers({
  app,
  mainMenu,
  deviceMenu,
  signinMenu,
  user,
  subscription,
  cards,
  account,
  yourNFT,
  yourUploads,
  checkout,
  digitalCanvas,
});

export default rootReducer;
