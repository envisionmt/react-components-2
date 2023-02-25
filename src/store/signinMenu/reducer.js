import { OPEN_SIGNIN_MENU, CLOSE_SIGNIN_MENU, TOGGLE_SIGNIN_MENU } from './constants';

const initialState = {
  menuOpen: false,
  touched: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_SIGNIN_MENU:
      return { ...state, menuOpen: true, touched: true };
    case CLOSE_SIGNIN_MENU:
      return { ...state, menuOpen: false, touched: true };
    case TOGGLE_SIGNIN_MENU:
      return { ...state, menuOpen: !state.menuOpen, touched: true };
    default:
      return state;
  }
};

export default reducer;
