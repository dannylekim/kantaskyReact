import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import App from "./app";
import { Router } from "react-router-dom";
import store from "./redux/configureStore";
import { Provider } from "react-redux";
import { history } from "./config/config";
import {
  LOGOUT,
  LOGIN_SUCCESS,
  GET_USER_SUCCESS,
  GET_USER_FAIL
} from "./redux/user/userActionTypes";
import { GET_GROUP_SUCCESS } from "./redux/group/groupActionTypes";
import { GET_USERS_PERSONAL_TASKS_SUCCESS } from "./redux/task/taskActionTypes";
import axios from "axios";
import { decode } from "jsonwebtoken";
import userApi from "./api/userApi";
import groupApi from "./api/groupApi";
import taskApi from "./api/taskApi";
import openSocket from "socket.io-client";
import { backendServerURL } from "./config/config";

const socket = openSocket(backendServerURL);

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
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    const userId = decode(token).id;
    store.dispatch({ type: LOGIN_SUCCESS, token: token });

    //load all
    getProfile(userId);
    getUsersGroups(userId);
    // getUsersTasks(userId);
    socket.emit('loggedIn', userId)
  }
};

const getProfile = async userId => {
  try {
    const response = await userApi.getUser(userId);
    store.dispatch({ type: GET_USER_SUCCESS, user: response.data });
  } catch (err) {
    store.dispatch({ type: GET_USER_FAIL, error: err.data });
  }
};

const getUsersGroups = async userId => {
  try {
    const response = await groupApi.getAllUsersGroups(userId); //api call to login
    store.dispatch({
      type: GET_GROUP_SUCCESS,
      groups: response.data
    }); //dispatch the successful login call
  } catch (err) {
    //TODO:
  }
};

const getUsersTasks = async userId => {
  try {
    const response = await taskApi.getUsersTasks(userId); //api call to login
    store.dispatch({
      type: GET_USERS_PERSONAL_TASKS_SUCCESS,
      personalTasks: response.data
    }); //dispatch the successful login call
  } catch (err) {
    //TODO:
  }
};

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App checkToken={checkToken} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
