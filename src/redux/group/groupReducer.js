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
      let groupArray = state.groups.slice(); // This is done because you want to CLONE the state rather than mutate it
      groupArray.push(action.group);
      return Object.assign({}, state, {
        groups: groupArray
      });
    default:
      return state;
  }
};
export default reducer;
