import groupApi from "../../api/groupApi";
import {getGroupSuccess } from "./groupActions";
import store from "../configureStore"


export const getUsersGroups = () => async dispatch => {
  try {
    const userId = store.getState().user.user._id
    const response = await groupApi.getAllUsersGroups(userId); //api call to login
    dispatch(getGroupSuccess(response.data)); //dispatch the successful login call
  } catch (err) {
    //TODO:
  }
};



