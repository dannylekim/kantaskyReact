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
      let isTaskPresent = state.tasks.find(
        task => task._id === action.task._id
      );
      if (isTaskPresent) return state;
      let taskArray = state.tasks.slice(); // This is done because you want to CLONE the state rather than mutate it
      taskArray.push(action.task);
      return Object.assign({}, state, {
        tasks: taskArray
      });
    case types.REMOVE_TASK_SUCCESS:
      let newArray = state.tasks.filter(
        task => task._id !== action.removedTaskId
      );
      return Object.assign({}, state, {
        tasks: newArray
      });
    case types.UPDATE_TASK_SUCCESS:
      let updatedTaskArray = state.tasks.filter(
        task => task._id !== action.task.id && task._id !== action.task._id
      );
      if (action.index !== undefined) {
        const index = updatedTaskArray.findIndex(
          task => task.category === action.task.category
        );
        updatedTaskArray.splice(index + action.index, 0, action.task);
      } else updatedTaskArray.push(action.task);
      return Object.assign({}, state, {
        tasks: updatedTaskArray
      });
    default:
      return state;
  }
};
export default reducer;
