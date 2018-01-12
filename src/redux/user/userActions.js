import * as types from "./userActionTypes";

export const loginSuccess = token => ({ type: types.LOGIN_SUCCESS, token: token }),
  loginFail = error => ({ type: types.LOGIN_FAIL, error: error });
