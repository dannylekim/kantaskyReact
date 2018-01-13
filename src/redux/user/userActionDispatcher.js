import UserApi from "../../api/userApi";
import { loginSuccess, loginFail } from "./userActions";
import jwt from "jsonwebtoken";
import {history} from '../../config/config'


/**
 * Logs the user in with the credentials and sends either a successful or fail action to the reducer
 *
 * @param {any} credentials takes username and password as properties
 */
export const login = credentials => async dispatch => {
  try {
    const response = await UserApi.authenticate(credentials);
    dispatch(loginSuccess(response.data.token));
    localStorage.setItem("token", response.data.token);
    history.push("/")
  } catch (err) {
    dispatch(loginFail(err.data));
  }
};

/**
 * Logs out
 *
 */
export const logout = () => dispatch => {
  dispatch(logout());
};

/**
 * Decodes the JWT and checks if the token has expired already. If so, it should redirect the user
 *
 * @param {any} token the JWT token
 */
export const checkToken = () => dispatch => {
  const token = localStorage.getItem("token");
  if (!token) {
    dispatch(logout());
    return;
  }

  const payload = jwt.decode(token);
  if (!token || Date.now() > payload.exp) {
    //TODO: Redirect
    dispatch(loginSuccess(token));
  } else {
    dispatch(logout());
  }
};
