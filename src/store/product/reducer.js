import { PRODUCTS_LOADED, PRODUCTS_STATUS } from "./types";

const initialState = {
  products: [],
  status: "undefined",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCTS_STATUS:
      return { ...state, status: payload };
    case PRODUCTS_LOADED:
      return { ...state, products: payload };
    default:
      return state;
  }
};