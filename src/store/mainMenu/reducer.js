import { OPEN_MAIN_MENU, CLOSE_MAIN_MENU, TOGGLE_MAIN_MENU } from './constants';

const initialState = { menuOpen: false, touched: false };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MAIN_MENU:
      return { ...state, menuOpen: true, touched: true };
    case CLOSE_MAIN_MENU:
      return { ...state, menuOpen: false, touched: true };
    case TOGGLE_MAIN_MENU:
      return { ...state, menuOpen: !state.menuOpen, touched: true };
    default:
      return state;
  }
};

export default reducer;
