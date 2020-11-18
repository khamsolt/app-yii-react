import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import rootReducer from "./reducers";

export default function configureStore(preloadedState) {
  const middlewares = [thunkMiddleware];

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(rootReducer, preloadedState, composeEnhancers(
      applyMiddleware(...middlewares)
  ));

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./reducers", () => store.replaceReducer(rootReducer));
  }

  return store;
}
