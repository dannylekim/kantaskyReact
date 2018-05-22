import {TOAST_ERROR, TOAST_SUCCESS} from "./toasterActionTypes"

export const TOAST_SUCCESS_MESSAGE = msg => ({
    type: TOAST_SUCCESS,
    message: msg
  }),
  TOAST_ERROR_MESSAGE = msg => ({
    type: TOAST_ERROR,
    message: msg
  });