//These are the actions that call the action types. In other words, a dispatcher

import * as types from "./userActionTypes";

export const loginSuccess = token => ({
    type: types.LOGIN_SUCCESS,
    token: token
  }),
  loginFail = error => ({ type: types.LOGIN_FAIL, error: error }),
  checkToken = () => ({ type: types.CHECK_TOKEN }),
  logout = () => ({ type: types.LOGOUT });
