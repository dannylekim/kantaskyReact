//This is the reducer that assigns states depending on the action received.

//note that tasks = SEARCHEDTASKS. Done this for lazy reasons 

import * as types from "./taskActionTypes";
import initial from "./taskInitialState";
import * as utilMethods from "../../utilMethods";

const reducer = (state = initial, action) => {
  let searchedTasks = [];
  switch (action.type) {
    //on a successful login, it will set the token, null all errors and authenticate the user.
    case types.GET_USERS_PERSONAL_TASKS_SUCCESS:
      return Object.assign({}, state, {
        allGroupTasks: action.personalTasks,
        tasks: action.personalTasks
      });
    case types.GET_GROUP_TASKS_SUCCESS:
      searchedTasks = utilMethods.getMatchingObjectsFromString(
        action.tasks,
        state.lastSearchString
      );

      return Object.assign({}, state, {
        allGroupTasks: action.tasks,
        tasks: searchedTasks
      });
    case types.CREATE_TASK_SUCCESS:
      let isTaskPresent = state.allGroupTasks.find(
        task => task._id === action.task._id
      );
      if (isTaskPresent) return state;
      let taskArray = state.allGroupTasks.slice(); // This is done because you want to CLONE the state rather than mutate it
      taskArray.push(action.task);
      searchedTasks = utilMethods.getMatchingObjectsFromString(
        taskArray,
        state.lastSearchString
      );
      return Object.assign({}, state, {
        allGroupTasks: taskArray,
        tasks: searchedTasks
      });
    case types.REMOVE_TASK_SUCCESS:
      let newArray = state.allGroupTasks.filter(
        task => task._id !== action.removedTaskId
      );
      searchedTasks = utilMethods.getMatchingObjectsFromString(
        newArray,
        state.lastSearchString
      );
      return Object.assign({}, state, {
        allGroupTasks: newArray,
        tasks: searchedTasks
      });
    case types.UPDATE_TASK_SUCCESS:
      let updatedTaskArray = state.allGroupTasks.filter(
        task => task._id !== action.task.id && task._id !== action.task._id
      );
      if (action.index !== undefined) {
        const index = updatedTaskArray.findIndex(
          task => task.category === action.task.category
        );
        updatedTaskArray.splice(index + action.index, 0, action.task);
      } else updatedTaskArray.push(action.task);

      searchedTasks = utilMethods.getMatchingObjectsFromString(
        updatedTaskArray,
        state.lastSearchString
      );
      return Object.assign({}, state, {
        allGroupTasks: updatedTaskArray,
        tasks: searchedTasks
      });
    case types.SEARCH_TASKS:
      const searchResults = utilMethods.getMatchingObjectsFromString(
        state.allGroupTasks,
        action.input
      );
      return Object.assign({}, state, {
        tasks: searchResults,
        lastSearchString: action.input
      });
    default:
      return state;
  }
};

export default reducer;
