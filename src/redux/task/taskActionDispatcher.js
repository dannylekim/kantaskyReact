import taskApi from "../../api/taskApi";
import { getUsersTaskSuccess } from "./taskActions";
// import { history } from "../../config/config";
import store from "../configureStore"


export const getUsersTasks = () => async dispatch => {
  try {
    const userId = store.getState().user.userId
    const response = await taskApi.getPersonalTasks(userId); //api call to login
    dispatch(getUsersTaskSuccess(response.data)); //dispatch the successful login call
  } catch (err) {
    //TODO:
  }
};

