import taskApi from "../../api/taskApi";
import * as actions from "./taskActions";
// import { history } from "../../config/config";
import store from "../configureStore";

export const getUsersTasks = () => async dispatch => {
  try {
    const userId = store.getState().user.userId;
    const response = await taskApi.getUsersTasks(userId); //api call to login
    dispatch(actions.getUsersTasksSuccess(response.data)); //dispatch the successful login call
  } catch (err) {
    //TODO:
  }
};

export const getGroupsTasks = groupId => async dispatch => {
  try {
    const response = await taskApi.getGroupsTasks(groupId);
    dispatch(actions.getGroupsTasksSuccess(response.data));
  } catch (err) {
    //TODO:
  }
};

export const createTaskInGroup = (task, groupId) => async dispatch => {
  try {
    const userId = store.getState().user.userId;
    const response = await taskApi.createTaskInGroup(groupId, userId, task);
    dispatch(actions.createTaskInGroupSuccess(response.data));
  } catch (err) {
    //TODO:
  }
};

export const removeTask = (taskId) => async dispatch => {
  try{ 
    const response = await taskApi.removeTask(taskId) //FIXME: This actually has a response to use for a toastr
    dispatch(actions.removeTaskSuccess(taskId))
  }
  catch(err) {
    //TODO:
  }
}
