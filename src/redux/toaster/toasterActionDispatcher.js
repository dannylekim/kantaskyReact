import {
  TOAST_SUCCESS_MESSAGE,
  TOAST_ERROR_MESSAGE,
  DELETE_ERROR_TOAST,
  DELETE_SUCCESS_MESSAGE
} from "./toasterActions";
import store from "../configureStore";

export const toastSuccess = message => {
  store.dispatch(TOAST_SUCCESS_MESSAGE(message));
};

export const toastError = message => {
  store.dispatch(TOAST_ERROR_MESSAGE(message));
};

export const deleteToastSuccess = id => {
  store.dispatch(DELETE_SUCCESS_MESSAGE(id));
};

export const deleteToastError = id => {
  store.dispatch(DELETE_ERROR_TOAST(id));
};
