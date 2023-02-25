import {
  OPEN_CHECKOUT_CART_SIDE_NAV,
  CLOSE_CHECKOUT_CART_SIDE_NAV,
  TOGGLE_CHECKOUT_CART_SIDE_NAV,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  UPDATE_CART_ITEM,
  CHECKOUT_CART_REQUEST,
  CHECKOUT_CART_SUCCESS,
  CHECKOUT_CART_FAILURE,
} from './constants';

const initialState = { displayItems: [], isOpen: false, loading: false, errors: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_CHECKOUT_CART_SIDE_NAV:
      return { ...state, isOpen: true };
    case CLOSE_CHECKOUT_CART_SIDE_NAV:
      return { ...state, isOpen: false };
    case TOGGLE_CHECKOUT_CART_SIDE_NAV:
      return { ...state, isOpen: !state.isOpen };
    case REMOVE_CART_ITEM:
      return {
        ...state,
        isOpen: true,
        displayItems: [...state.displayItems.filter((item) => item !== action.payload)],
      };
    case ADD_CART_ITEM:
      return {
        ...state,
        isOpen: true,
        displayItems: [...state.displayItems, action.payload],
      };
    case UPDATE_CART_ITEM:
      return {
        ...state,
        isOpen: true,
        displayItems: action.payload,
      };
    case CHECKOUT_CART_REQUEST:
      return { ...state, loading: true };
    case CHECKOUT_CART_SUCCESS:
      return { ...state, loading: false, data: action.payload, errors: [] };
    case CHECKOUT_CART_FAILURE:
      return { ...state, loading: false, errors: action.errors };
    default:
      return state;
  }
};

export default reducer;
