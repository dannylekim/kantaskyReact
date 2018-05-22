import { toastError, toastSuccess } from "./toasterActionDispatcher";

export const toasterHandler = (message, isError) => {
//   isError ? toastError(message) : toastSuccess(message);
toastSuccess(message)
};
