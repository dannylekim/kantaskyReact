import taskApi from "../../api/taskApi";
import { getUsersTaskSuccess } from "./taskActions";
// import { history } from "../../config/config";


export const getUsersTasks = userId => async dispatch => {
  try {
    const response = await taskApi.getPersonalTasks(userId); //api call to login
    dispatch(getUsersTaskSuccess(response.data)); //dispatch the successful login call
  } catch (err) {
    //TODO:
  }
};

