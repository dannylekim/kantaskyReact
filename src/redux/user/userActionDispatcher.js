import {
  loginSuccess,
  loginFail,
  signUpFail,
  signUpSuccess,
  logout,
  getUserSuccess,
  updateUserSuccess,
  updateUserFail,
  getUserFail,
  changePasswordSuccess,
  changePasswordFail
} from "./userActions";
import { history } from "../../config/config";
import UserApi from "../../api/userApi";
import axios from "axios";
import { decode } from "jsonwebtoken";
import { socket } from "../../index";
import {toasterHandler} from "../toaster/toasterHandler"
import { toast } from "react-toastify";

/**
 * Logs the user in with the credentials and sends either a successful or fail action to the reducer
 *
 * @param {any} credentials takes username and password as properties
 */
export const login = credentials => async dispatch => {
  try {
    const response = await UserApi.authenticate(credentials); //api call to login
    localStorage.setItem("token", response.data.token); //set into localStorage for later use
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + response.data.token;
    const payload = decode(response.data.token);
    dispatch(loginSuccess(response.data.token, payload.id)); //dispatch the successful login call
    socket.emit("loggedIn", payload.id);
    return payload.id;
    // getUser(payload.id);
    // history.push("/"); //change page
  } catch (err) {
    dispatch(loginFail(err.data)); //dispatch login fail
  }
};

/**
 * Logs out
 *
 */
export const signOut = () => dispatch => {
  localStorage.clear(); //clear local storage
  dispatch(logout()); //dispatch logout
  history.push("/login");
};

export const signUp = newUser => async dispatch => {
  try {
    await UserApi.signUp(newUser);
    dispatch(signUpSuccess());
    history.push("/login");
  } catch (err) {
    dispatch(signUpFail(err.data));
    toasterHandler(err.data, true)
  }
};

export const getUser = userId => async dispatch => {
  try {
    const response = await UserApi.getUser(userId);
    dispatch(getUserSuccess(response.data));
  } catch (err) {
    dispatch(getUserFail(err.data));
    toasterHandler(err.data, true)
  }
};

export const changePassword = (newPassword, userId) => async dispatch => {
  try {
    const data = {
      password: newPassword
    };
    const response = await UserApi.changePassword(data, userId);
    dispatch(changePasswordSuccess(response.data));
    toasterHandler("Password has been updated!", false)
  } catch (err) {
    dispatch(changePasswordFail(err.data));
    toasterHandler(err.data, true)
  }
};

export const updateAccount = (newAccountDetails, userId) => async dispatch => {
  try {
    const response = await UserApi.updateUser(newAccountDetails, userId);
    dispatch(updateUserSuccess(response.data));
    toasterHandler("Successfully updated your profile!", false)
  } catch (err) {
    dispatch(updateUserFail(err.data));
    toasterHandler(err.data, true)
  }
};

export const inviteUser = (targetGroupId, inviteeUserId) => async dispatch => {
  try {
    const response = await UserApi.inviteUser(targetGroupId, inviteeUserId);
    toasterHandler("Invite has been sent!", false)
  } catch (err) {
    toasterHandler(err.data, true)
  }
};
