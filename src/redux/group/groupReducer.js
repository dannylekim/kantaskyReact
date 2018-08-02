//This is the reducer that assigns states depending on the action received.

import * as types from "./groupActionTypes";
import initial from "./groupInitialState";
import * as util from "../../utilMethods";

const reducer = (state = initial, action) => {
  let searchedGroups = [];
  switch (action.type) {
    //on a successful login, it will set the token, null all errors and authenticate the user.
    case types.GET_GROUP_SUCCESS:
      searchedGroups = util.getMatchingObjectsFromString(
        action.groups,
        state.lastSearchString
      );
      return Object.assign({}, state, {
        allGroups: action.groups,
        groups: searchedGroups
      });
    case types.CREATE_GROUP_SUCCESS:
      let ifGroupPresent = state.allGroups.find(
        group => group._id === action.group._id
      );
      if (ifGroupPresent) return state;
      let groupArray = state.allGroups.slice(); // This is done because you want to CLONE the state rather than mutate it
      groupArray.push(action.group);

      searchedGroups = util.getMatchingObjectsFromString(
        groupArray,
        state.lastSearchString
      );
      return Object.assign({}, state, {
        allGroups: groupArray,
        groups: searchedGroups
      });
    case types.UPDATE_GROUP_SUCCESS:
      let updatedGroupArray = state.allGroups.filter(
        group => group._id !== action.group._id
      );
      updatedGroupArray.push(action.group);
      searchedGroups = util.getMatchingObjectsFromString(
        updatedGroupArray,
        state.lastSearchString
      );
      return Object.assign({}, state, {
        allGroups: updatedGroupArray,
        groups: searchedGroups
      });
    case types.DELETE_GROUP_SUCCESS:
      let oneLessGroupArray = state.allGroups.filter(
        group => group._id !== action.groupId
      );

      searchedGroups = util.getMatchingObjectsFromString(
        oneLessGroupArray,
        state.lastSearchString
      );
      return Object.assign({}, state, {
        allGroups: oneLessGroupArray,
        groups: searchedGroups
      });
    case types.LEAVE_GROUP_SUCCESS: //FIXME: this is literally the same as leave group
      let oneLessGroupArrayAgain = state.allGroups.filter(
        group => group._id !== action.groupId
      );
      searchedGroups = util.getMatchingObjectsFromString(
        oneLessGroupArrayAgain,
        state.lastSearchString
      );
      return Object.assign({}, state, {
        allGroups: oneLessGroupArrayAgain,
        groups: searchedGroups
      });
    case types.JOIN_GROUP_SUCCESS: //FIXME: this is literally the same as create group
      let ifThisGroupPresent = state.allGroups.find(
        group => group._id === action.group._id
      );
      if (ifThisGroupPresent) return state;
      let joinedGroupArray = state.allGroups.slice(); // This is done because you want to CLONE the state rather than mutate it
      joinedGroupArray.push(action.group);
      searchedGroups = util.getMatchingObjectsFromString(
        joinedGroupArray,
        state.lastSearchString
      );
      return Object.assign({}, state, {
        allGroups: joinedGroupArray,
        groups: searchedGroups
      });

    case types.SEARCH_GROUPS:
      const searchResults = util.getMatchingObjectsFromString(
        state.allGroups,
        action.input
      );
      return Object.assign({}, state, {
        groups: searchResults,
        lastSearchString: action.input
      });
    default:
      return state;
  }
};
export default reducer;
