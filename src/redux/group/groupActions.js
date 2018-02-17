//These are the actions that call the action types. In other words, a dispatcher

import * as types from "./groupActionTypes";

export const getGroupSuccess = groups => ({
    type: types.GET_GROUP_SUCCESS,
    groups: groups
  }),
  getGroupFail = error => ({
    type: types.GET_GROUP_FAIL,
    error: error
  }),
  deleteGroupSuccess = message => ({
    type: types.DELETE_GROUP_SUCCESS,
    message: message
  }),
  deleteGroupFail = error => ({
    type: types.DELETE_GROUP_FAIL,
    error: error
  }),
  createGroupSuccess = group => ({
    type: types.CREATE_GROUP_SUCCESS,
    groups: group //TODO: should be adding to the list
  }),
  createGroupFail = error => ({
    type: types.CREATE_GROUP_FAIL,
    error: error
  }),
  updateGroupSuccess = group => ({
    type: types.UPDATE_GROUP_SUCCESS,
    groups: group //TODO: should be changing that group on the list
  }),
  updateGroupFail = error => ({
    type: types.UPDATE_GROUP_FAIL,
    error: error
  });
