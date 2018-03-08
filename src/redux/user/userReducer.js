//This is the reducer that assigns states depending on the action received.

import * as types from "./userActionTypes";
import initial from "./userInitialState";

const reducer = (state = initial, action) => {
  switch (action.type) {
    //on a successful login, it will set the token, null all errors and authenticate the user.
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        token: action.token,
        loginError: null,
        authenticated: true,
        message: null,
        signUpErrors: null,
      });
    //on fail, post the error
    case types.LOGIN_FAIL:
      return Object.assign({}, state, {
        loginError: action.error,
        message: null
      });
    //null token and unauthenticates the user
    case types.LOGOUT:
      return Object.assign({}, state, {
        token: null,
        authenticated: false,
        loginError: null,
        signUpError: null
      });
    //Clear errors and display message
    case types.SIGNUP_SUCCESS:
      return Object.assign({}, state, {
        message: "You may now log-in with the username you have chosen",
        signUpErrors: null
      });
    //errors
    case types.SIGNUP_FAIL:
      return Object.assign({}, state, { signUpErrors: action.error });
    //null errors and update user state
    case types.GET_USER_SUCCESS:
      return Object.assign({}, state, { user: action.user, errors: null });

    //display errors
    case types.GET_USER_FAIL:
      return Object.assign({}, state, { errors: action.error });

    //display message, null errors
    case types.USER_CHANGE_PASSWORD_SUCCESS:
      return Object.assign({}, state, {
        message: "You have successfully changed your password",
        errors: null
      });

    //display errors
    case types.USER_CHANGE_PASSWORD_FAIL:
      return Object.assign({}, state, { errors: action.error });

    //display message and null errors
    case types.USER_UPDATE_SUCCESS:
      return Object.assign({}, state, {
        message: "You have successfully updated your account!",
        user: action.user,
        errors: null
      });

    //display message and null errors
    case types.USER_UPDATE_FAIL:
      return Object.assign({}, state, { errors: action.error });
    default:
      return state;
  }
};
export default reducer;
