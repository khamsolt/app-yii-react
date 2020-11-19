import reducer from "../order/reducer";
import { ADD_TO_CART, CLEAR_CART } from "./types";

const initialState = {
  products: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return { ...state, products: payload };
    case CLEAR_CART:
      return { ...state, products: [] };
    default:
      return state;
  }
};
