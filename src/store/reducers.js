import { combineReducers } from "redux";
import productReducer from "./product/reducer";
import orderReducer from "./order/reducer";
import cartReducer from "./cart/reducer";

const initialStore = {};

const appReducer = (store = initialStore, action) => {
  switch (action.type) {
    default:
      return store;
  }
};

export default combineReducers({
  app: appReducer,
  product: productReducer,
  order: orderReducer,
  cart: cartReducer,
});
