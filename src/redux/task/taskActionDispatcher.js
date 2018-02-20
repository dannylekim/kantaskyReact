import taskApi from "../../api/taskApi";
import {
  getGroupsTasksSuccess,
  getUsersTasksSuccess,
  createTaskInGroupSuccess
} from "./taskActions";
// import { history } from "../../config/config";
import store from "../configureStore";

export const getUsersTasks = () => async dispatch => {
  try {
    const userId = store.getState().user.userId;
    const response = await taskApi.getUsersTasks(userId); //api call to login
    dispatch(getUsersTasksSuccess(response.data)); //dispatch the successful login call
  } catch (err) {
    //TODO:
  }
};

export const getGroupsTasks = groupId => async dispatch => {
  try {
    const response = await taskApi.getGroupsTasks(groupId);
    dispatch(getGroupsTasksSuccess(response.data));
  } catch (err) {
    //TODO:
  }
};

export const createTaskInGroup = (task, groupId) => async dispatch => {
  try {
    const userId = store.getState().user.userId;
    const response = await taskApi.createTaskInGroup(groupId, userId, task);
    dispatch(createTaskInGroupSuccess(response.data));
  } catch (err) {
    //TODO:
  }
};
