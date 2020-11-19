import { ORDER_CREATED, ORDER_ERROR, ORDER_LOADED, ORDER_STATUS } from "./types";

const initialState = {
  orders: [],
  success: {},
  error: null,
  status: undefined,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ORDER_CREATED:
      return {
        ...state,
        success: payload,
      };
    case ORDER_ERROR:
      return {
        ...state,
        error: payload,
      };
    case ORDER_STATUS:
      return {
        ...state,
        staus: payload,
      };
    case ORDER_LOADED:
      return {
        ...state,
        orders: payload,
      };
    default:
      return state;
  }
};
