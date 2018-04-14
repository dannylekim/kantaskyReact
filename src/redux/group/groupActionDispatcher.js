import groupApi from "../../api/groupApi";
import {getGroupSuccess, createGroupSuccess, updateGroupSuccess } from "./groupActions";
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

export const createGroup = (newGroup) => async dispatch => { 
  try{
    const userId = store.getState().user.user._id
    const response = await groupApi.createGroup(userId, newGroup) 
    dispatch(createGroupSuccess(response.data))
  }
  catch(err){
    //TODO:
  }
}

export const editGroup = (updatedGroup, groupId) => async dispatch => {
  try{
    const response = await groupApi.updateGroup(updatedGroup, groupId)
    dispatch(updateGroupSuccess(response.data))
  }
  catch(err){
    //TODO:
  }
}
