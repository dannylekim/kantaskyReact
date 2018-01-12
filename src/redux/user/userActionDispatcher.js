import UserApi from "../../api/userApi";
import { loginSuccess, loginFail } from "./userActions";

export const login = credentials => async dispatch => {
  try {
    const response = await UserApi.authenticate(credentials);
    dispatch(loginSuccess(response.data.token));
  } catch (err) {
    dispatch(loginFail(err.data));
  }
};
 