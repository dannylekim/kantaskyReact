import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import App from "./app";
import { Router } from "react-router-dom";
import store from "./redux/configureStore";
import { Provider } from "react-redux";
import { history } from "./config/config";
import { LOGOUT, LOGIN_SUCCESS } from "./redux/user/userActionTypes";
import axios from "axios"

//FIXME:Consider moving this to redux in some way?
/**
 * Decodes the JWT and checks if the token has expired already. If so, it should redirect the user
 *
 * @param {any} token the JWT token
 */
const checkToken = () => {
  const token = localStorage.getItem("token"); //get the token from localStorage
  if (!token) {
    store.dispatch({ type: LOGOUT }); //if no token exists, logout
    history.push("/login"); //go to login page
    return; //exit function
  } else {
    //else dispatch success
    axios.defaults.headers.common['Authorization'] = "Bearer " + token
    store.dispatch({ type: LOGIN_SUCCESS, token: token });
  }
};

checkToken();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
