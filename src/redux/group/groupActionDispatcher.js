import groupApi from "../../api/groupApi";
import {
  getGroupSuccess,
  createGroupSuccess,
  updateGroupSuccess,
  leaveGroupSuccess,
  deleteGroupSuccess,
  joinGroupSuccess,
  searchGroups
} from "./groupActions";
import store from "../configureStore";
import { history } from "../../config/config";
import { toasterHandler } from "../toaster/toasterHandler";

export const getUsersGroups = () => async dispatch => {
  try {
    const userId = store.getState().user.user._id;
    const response = await groupApi.getAllUsersGroups(userId); //api call to login
    dispatch(getGroupSuccess(response.data)); //dispatch the successful login call
  } catch (err) {
    toasterHandler(err.data, true);
  }
};

export const createGroup = newGroup => async dispatch => {
  try {
    const userId = store.getState().user.user._id;
    const response = await groupApi.createGroup(userId, newGroup);
    dispatch(createGroupSuccess(response.data));
    toasterHandler("Successfully created group!", false)
  } catch (err) {
    toasterHandler(err.data, true);
  }
};

export const editGroup = (updatedGroup, groupId) => async dispatch => {
  try {
    const response = await groupApi.updateGroup(updatedGroup, groupId);
    dispatch(updateGroupSuccess(response.data));
    toasterHandler("Successfully updated the group!", false)
  } catch (err) {
    toasterHandler(err.data, true);
  }
};

export const leaveGroup = (groupId, newTeamLeader) => async dispatch => {
  try {
    await groupApi.leaveGroup(groupId, newTeamLeader);
    dispatch(leaveGroupSuccess(groupId));
    history.push("/groups");
    toasterHandler("You have successfully left the group!", false)
  } catch (err) {
    toasterHandler(err.data, true);
  }
};

export const deleteGroup = groupId => async dispatch => {
  try {
    await groupApi.deleteGroup(groupId);
    dispatch(deleteGroupSuccess(groupId));
    history.push("/groups");
    toasterHandler("Group has been deleted!", false)
  } catch (err) {
    toasterHandler(err.data, true);
  }
};

export const joinGroup = groupId => async dispatch => {
  try {
    const response = await groupApi.joinGroup(groupId);
    dispatch(joinGroupSuccess(response.data));
    toasterHandler("You have joined a new group!", false)
    return true; //this is to tell the caller that the user has successfully joined and can now remove the notification from list in the UI
    //NOTE: this might've actually been taken care of by sockets and the backend. Need to investigate
  } catch (err) {
    toasterHandler(err.data, true);
  }
};

export const searchGroup = inputString => dispatch => {
  dispatch(searchGroups(inputString))
}
