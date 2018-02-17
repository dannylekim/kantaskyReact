//This file configures the store for redux

import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./rootReducer";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  /* preloadedState, */ composeEnhancers(
    applyMiddleware(createLogger(), thunkMiddleware)
  )
);

export default store;
