import UserApi from "../../api/userApi";
import { loginSuccess, loginFail, signUpFail, signUpSuccess } from "./userActions";
import { history } from "../../config/config";

/**
 * Logs the user in with the credentials and sends either a successful or fail action to the reducer
 *
 * @param {any} credentials takes username and password as properties
 */
export const login = credentials => async dispatch => {
  try {
    const response = await UserApi.authenticate(credentials); //api call to login
    dispatch(loginSuccess(response.data.token)); //dispatch the successful login call
    localStorage.setItem("token", response.data.token); //set into localStorage for later use
    history.push("/"); //change page
  } catch (err) {
    dispatch(loginFail(err.data)); //dispatch login fail
  }
};

/**
 * Logs out
 *
 */
export const logout = () => dispatch => {
  localStorage.clear(); //clear local storage
  dispatch(logout()); //dispatch logout
};

export const signUp = newUser => async dispatch => {
  try {
    await UserApi.signUp(newUser);
    dispatch(signUpSuccess())
    history.push("/login")
  } catch (err) {
    console.log(err.data)
    dispatch(signUpFail(err.data))
  }
};
