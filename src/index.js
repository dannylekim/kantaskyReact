import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import App from "./app";
import { Router } from "react-router-dom";
import store from "./redux/configureStore";
import { Provider } from "react-redux";
import { history } from "./config/config";
import { LOGOUT, LOGIN_SUCCESS  } from "./redux/user/userActionTypes";
import jwt from "jsonwebtoken";

/**
 * Decodes the JWT and checks if the token has expired already. If so, it should redirect the user
 *
 * @param {any} token the JWT token
 */
const checkToken = () => {
  const token = localStorage.getItem("token"); //get the token from localStorage
  if (!token) {
    store.dispatch({type: LOGOUT}); //if no token exists, logout
    history.push("/login"); //go to login page
    return; //exit function
  }


  else {
    //else dispatch success
    store.dispatch( {type:LOGIN_SUCCESS, token: token});
  }

  // const payload = jwt.decode(token); //decode the token

  //if token's expiry date has passed, clear the local storage, dispatch to logout and push to login
  // if (Date.now() > payload.exp) {
  //   localStorage.clear();
  //   store.dispatch({type: logout})
  //   history.push("/login");
  // } 
  // else {
  //   //else dispatch success
  //   store.dispatch( {type:loginSuccess(token)});
  // }
};



checkToken()




ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();





