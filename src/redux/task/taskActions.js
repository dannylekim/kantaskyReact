import * as types from "./taskActionTypes";

export const createTaskInGroupSuccess = task => ({
    type: types.CREATE_TASK_SUCCESS,
    tasks: task
  }), //TODO: add to the task list, figure out how you do this
  createTaskInGroupFail = error => ({
    type: types.CREATE_TASK_FAIL,
    error: error
  }),
  deleteTaskSuccess = tasks => ({
    type: types.DELETE_TASK_SUCCESS,
    tasks: tasks
  }), //TODO: add to task list, figure this out
  deleteTaskFail = error => ({ type: types.DELETE_TASK_FAIL, error: error }),
  getUsersTaskSuccess = tasks => ({
    type: types.GET_USERS_PERSONAL_TASKS_SUCCESS,
    personalTasks: tasks
  }),
  getUsersTaskFail = error => ({
    type: types.GET_USERS_PERSONAL_TASKS_FAIL,
    error: error
  }),
  getUsersTasksInGroupSuccess = tasks => ({
    types: types.GET_USERS_GROUP_TASKS_SUCCESS,
    tasks: tasks
  }), //TODO: where to put tasks
  getUsersTasksInGroupFail = error => ({
    types: types.GET_USERS_GROUP_TASKS_FAIL,
    error: error
  }),
  updateTaskSuccess = tasks => ({
    types: types.UPDATE_TASK_SUCCESS,
    tasks: tasks
  }), //TODO: WHERE to put this
  updateTaskFail = error => ({ types: types.UPDATE_TASK_FAIL, error: error });
