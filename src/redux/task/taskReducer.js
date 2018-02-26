//This is the reducer that assigns states depending on the action received.

import * as types from "./taskActionTypes";
import initial from "./taskInitialState";

const reducer = (state = initial, action) => {
  switch (action.type) {
    //on a successful login, it will set the token, null all errors and authenticate the user.
    case types.GET_USERS_PERSONAL_TASKS_SUCCESS:
      return Object.assign({}, state, {
        tasks: action.personalTasks
      });
    case types.GET_GROUP_TASKS_SUCCESS:
      return Object.assign({}, state, {
        tasks: action.tasks
      });
    case types.CREATE_TASK_SUCCESS:
      let taskArray = state.tasks.slice(); // This is done because you want to CLONE the state rather than mutate it
      taskArray.push(action.task);
      return Object.assign({}, state, {
        tasks: taskArray
      });
    case types.REMOVE_TASK_SUCCESS:
      let newArray = state.tasks.filter(task => task._id !== action.removedTaskId);
      return Object.assign({}, state, {
        tasks: newArray
      });
    default:
      return state;
  }
};
export default reducer;
