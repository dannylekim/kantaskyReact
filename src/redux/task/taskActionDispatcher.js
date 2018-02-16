import taskApi from "../../api/taskApi";
import { getPersonalTaskSuccess, getUsersTasksInGroupSuccess } from "./taskActions";
// import { history } from "../../config/config";
import store from "../configureStore"


export const getPersonalTasks = () => async dispatch => {
  try {
    const userId = store.getState().user.userId
    const response = await taskApi.getPersonalTasks(userId); //api call to login
    dispatch(getPersonalTaskSuccess(response.data)); //dispatch the successful login call
  } catch (err) {
    //TODO:
  }
}

export const getUsersTasks = (groupId) => async dispatch => {
  try {
    const userId = store.getState().user.userId //to be removed
    const response = await taskApi.getUsersTasksInGroup(groupId, userId)
    dispatch(getUsersTasksInGroupSuccess(response.data))
  }
  catch(err){
    //TODO:
  }
}

