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
        signUpErrors: null
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
    case types.SIGNUP_SUCCESS:
      return Object.assign({}, state, {
        message: "You may now log-in with the username you have chosen",
        signUpErrors: null
      });
    case types.SIGNUP_FAIL:
      return Object.assign({}, state, { signUpErrors: action.error });
    default:
      return state;
  }
};
export default reducer;
