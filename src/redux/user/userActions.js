//These are the actions that call the action types. In other words, a dispatcher

import * as types from "./userActionTypes";

export const loginSuccess = (token) => ({
    type: types.LOGIN_SUCCESS,
    token: token
  }),
  loginFail = error => ({ type: types.LOGIN_FAIL, error: error }),
  checkToken = () => ({ type: types.CHECK_TOKEN }),
  logout = () => ({ type: types.LOGOUT }),
  signUpSuccess = () => ({ type: types.SIGNUP_SUCCESS }),
  signUpFail = error => ({ type: types.SIGNUP_FAIL, error: error }),
  getUserSuccess = user => ({ type: types.GET_USER_SUCCESS, user: user }),
  getUserFail = error => ({ type: types.GET_USER_FAIL, error: error }),
  changePasswordSuccess = () => ({ type: types.USER_CHANGE_PASSWORD_SUCCESS }),
  changePasswordFail = error => ({
    type: types.USER_CHANGE_PASSWORD_FAIL,
    error: error
  }),
  updateUserSuccess = user => ({ type: types.USER_UPDATE_SUCCESS, user: user }),
  updateUserFail = error => ({ type: types.USER_UPDATE_FAIL, error: error }),
  inviteUserSuccess = () => ({type: types.INVITE_USER_SUCCESS});
