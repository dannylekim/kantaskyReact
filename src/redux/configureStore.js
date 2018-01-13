//This file configures the store for redux

import { createStore, applyMiddleware } from "redux";
import reducer from "./rootReducer";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

const store = createStore(
  reducer,
  applyMiddleware(createLogger(), thunkMiddleware)
);

export default store;
