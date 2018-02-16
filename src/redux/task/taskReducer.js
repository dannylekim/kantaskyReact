//This is the reducer that assigns states depending on the action received.

import * as types from "./taskActionTypes";
import initial from "./taskInitialState";

const reducer = (state = initial, action) => {
  switch (action.type) {
    //on a successful login, it will set the token, null all errors and authenticate the user.
    case types.GET_USERS_PERSONAL_TASKS_SUCCESS:
      return Object.assign({}, state, {
        personalTasks: action.personalTasks
      });
    case types.GET_USERS_GROUP_TASKS_SUCCESS:
    return Object.assign({}, state, {
      tasks: action.tasks
    });
    default:
      return state;
  }
};
export default reducer;
