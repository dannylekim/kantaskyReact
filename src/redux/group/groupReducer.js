//This is the reducer that assigns states depending on the action received.

import * as types from "./groupActionTypes";
import initial from "./groupInitialState";

const reducer = (state = initial, action) => {
  switch (action.type) {
    //on a successful login, it will set the token, null all errors and authenticate the user.
    case types.GET_GROUP_SUCCESS:
      return Object.assign({}, state, {
        groups: action.groups
      });
    case types.CREATE_GROUP_SUCCESS:
      let ifGroupPresent = state.groups.find(
        group => group._id === action.group._id
      );
      if (ifGroupPresent) return state;
      let groupArray = state.groups.slice(); // This is done because you want to CLONE the state rather than mutate it
      groupArray.push(action.group);
      return Object.assign({}, state, {
        groups: groupArray
      });
    case types.UPDATE_GROUP_SUCCESS:
      let updatedGroupArray = state.groups.filter(
        group => group._id !== action.group._id
      );
      updatedGroupArray.push(action.group);
      return Object.assign({}, state, {
        groups: updatedGroupArray
      });
    case types.DELETE_GROUP_SUCCESS:
      let oneLessGroupArray = state.groups.filter(
        group => group._id !== action.groupId
      );
      return Object.assign({}, state, {
        groups: oneLessGroupArray
      });
    case types.LEAVE_GROUP_SUCCESS: //FIXME: this is literally the same as leave group
      let oneLessGroupArrayAgain = state.groups.filter(
        group => group._id !== action.groupId
      );
      return Object.assign({}, state, {
        groups: oneLessGroupArrayAgain
      });
    case types.JOIN_GROUP_SUCCESS: //FIXME: this is literally the same as create group
      let ifThisGroupPresent = state.groups.find(
        group => group._id === action.group._id
      );
      if (ifThisGroupPresent) return state;
      let joinedGroupArray = state.groups.slice(); // This is done because you want to CLONE the state rather than mutate it
      joinedGroupArray.push(action.group);
      return Object.assign({}, state, {
        groups: joinedGroupArray
      });
    default:
      return state;
  }
};
export default reducer;
