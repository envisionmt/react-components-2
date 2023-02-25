import { OPEN_DEVICE_MENU, CLOSE_DEVICE_MENU, TOGGLE_DEVICE_MENU } from './constants';

const initialState = {
  menuOpen: false,
  touched: false,
  contentToPlay: { artworkId: null, collectionId: null },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_DEVICE_MENU:
      return { ...state, menuOpen: true, touched: true, contentToPlay: action.payload };
    case CLOSE_DEVICE_MENU:
      return { ...state, menuOpen: false, touched: true, contentToPlay: { artworkId: null, playlistId: null } };
    case TOGGLE_DEVICE_MENU:
      return { ...state, menuOpen: !state.menuOpen, touched: true };
    default:
      return state;
  }
};

export default reducer;
