import taskApi from "../../api/taskApi";
import * as actions from "./taskActions";
// import { history } from "../../config/config";
import store from "../configureStore";
import {toasterHandler} from "../toaster/toasterHandler"

export const getUsersTasks = () => async dispatch => {
  try {
    const userId = store.getState().user.user._id;
    const response = await taskApi.getUsersTasks(userId); //api call to login
    dispatch(actions.getUsersTasksSuccess(response.data)); //dispatch the successful login call
  } catch (err) {
    toasterHandler(err.data, true)
  }
};

export const getGroupsTasks = groupId => async dispatch => {
  try {
    const response = await taskApi.getGroupsTasks(groupId);
    dispatch(actions.getGroupsTasksSuccess(response.data));
  } catch (err) {
    toasterHandler(err.data, true)
  }
};

export const createTaskInGroup = (task, groupId) => async dispatch => {
  try {
    const userId = store.getState().user.user._id;
    const response = await taskApi.createTaskInGroup(groupId, userId, task);
    dispatch(actions.createTaskInGroupSuccess(response.data));
    toasterHandler("Successfully created task!", false)
  } catch (err) {
    toasterHandler(err.data, true)
  }
};

export const removeTask = (taskId) => async dispatch => {
  try{ 
    const response = await taskApi.removeTask(taskId)
    dispatch(actions.removeTaskSuccess(taskId))
    toasterHandler(response.data, false)
  }
  catch(err) {
    toasterHandler(err.data, true)
  }
}

export const editTask = (task) => async dispatch => {
  try{ 
    const response = await taskApi.updateTask(task)
    dispatch(actions.updateTaskSuccess(response.data))
    toasterHandler("Successfully updated Task!", false)
  }
  catch(err) { 
    toasterHandler(err.data, true)
  }
}