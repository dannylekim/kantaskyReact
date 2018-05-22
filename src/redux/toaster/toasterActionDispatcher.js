import { TOAST_SUCCESS_MESSAGE, TOAST_ERROR_MESSAGE } from "./toasterActions";
import store from "../configureStore";

export const toastSuccess = message => {
  store.dispatch(TOAST_SUCCESS_MESSAGE(message));
};

export const toastError = message => dispatch => {
  store.dispatch(TOAST_ERROR_MESSAGE(message));
};
