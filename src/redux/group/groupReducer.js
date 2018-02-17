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
    default:
      return state;
  }
};
export default reducer;
