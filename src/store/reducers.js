import { combineReducers } from "redux";
import productReducer from "./product/reducer";

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
});
