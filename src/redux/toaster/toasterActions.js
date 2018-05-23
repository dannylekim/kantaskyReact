import {
  TOAST_ERROR,
  TOAST_SUCCESS,
  DELETE_TOAST_ERROR,
  DELETE_TOAST_SUCCESS
} from "./toasterActionTypes";

export const TOAST_SUCCESS_MESSAGE = msg => ({
    type: TOAST_SUCCESS,
    message: msg
  }),
  TOAST_ERROR_MESSAGE = msg => ({
    type: TOAST_ERROR,
    message: msg
  }),
  DELETE_ERROR_TOAST = id => ({
    type: DELETE_TOAST_ERROR,
    id: id
  }),
  DELETE_SUCCESS_MESSAGE = id => ({
    type: DELETE_TOAST_SUCCESS,
    id: id
  });
