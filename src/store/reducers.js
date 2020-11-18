import { combineReducers } from "redux";

const initialStore = {};

const reducer = (store = initialStore, action) => {
  switch (action.type) {
    default:
      return store;
  }
};

export default combineReducers({
  app: reducer,
});
