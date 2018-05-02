import groupApi from "../../api/groupApi";
import {
  getGroupSuccess,
  createGroupSuccess,
  updateGroupSuccess,
  leaveGroupSuccess,
  deleteGroupSuccess,
  joinGroupSuccess
} from "./groupActions";
import store from "../configureStore";
import { history } from "../../config/config";

export const getUsersGroups = () => async dispatch => {
  try {
    const userId = store.getState().user.user._id;
    const response = await groupApi.getAllUsersGroups(userId); //api call to login
    dispatch(getGroupSuccess(response.data)); //dispatch the successful login call
  } catch (err) {
    //TODO:
  }
};

export const createGroup = newGroup => async dispatch => {
  try {
    const userId = store.getState().user.user._id;
    const response = await groupApi.createGroup(userId, newGroup);
    dispatch(createGroupSuccess(response.data));
  } catch (err) {
    //TODO:
  }
};

export const editGroup = (updatedGroup, groupId) => async dispatch => {
  try {
    const response = await groupApi.updateGroup(updatedGroup, groupId);
    dispatch(updateGroupSuccess(response.data));
  } catch (err) {
    //TODO:
  }
};

export const leaveGroup = (groupId, newTeamLeader) => async dispatch => {
  try {
    await groupApi.leaveGroup(groupId, newTeamLeader);
    dispatch(leaveGroupSuccess(groupId))
    history.push("/groups");
  } catch (err) {
    //TODO:
  }
};

export const deleteGroup = groupId => async dispatch => {
  try {
    await groupApi.deleteGroup(groupId);
    dispatch(deleteGroupSuccess(groupId));
    history.push("/groups");
  } catch (err) {
    //TODO:
  }
};

export const joinGroup = groupId => async dispatch => {
  try {
    const response = await groupApi.joinGroup(groupId);
    dispatch(joinGroupSuccess(response.data));
    return true
  } catch (err) {
    //TODO:
  }
};
