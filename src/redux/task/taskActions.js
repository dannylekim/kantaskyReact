import * as types from "./taskActionTypes";

export const createTaskInGroupSuccess = task => ({
    type: types.CREATE_TASK_SUCCESS,
    task: task
  }), //TODO: add to the task list, figure out how you do this
  createTaskInGroupFail = error => ({
    type: types.CREATE_TASK_FAIL,
    error: error
  }),
  removeTaskSuccess = (removedTaskId) => ({
    type: types.REMOVE_TASK_SUCCESS,
    removedTaskId: removedTaskId
  }), //TODO: add to task list, figure this out
  deleteTaskFail = error => ({ type: types.REMOVE_TASK_FAIL, error: error }),
  getUsersTasksSuccess = tasks => ({
    type: types.GET_USERS_PERSONAL_TASKS_SUCCESS,
    personalTasks: tasks
  }),
  getUsersTasksFail = error => ({
    type: types.GET_USERS_PERSONAL_TASKS_FAIL,
    error: error
  }),
  getUsersTasksInGroupSuccess = tasks => ({
    type: types.GET_USERS_GROUP_TASKS_SUCCESS,
    tasks: tasks
  }), //TODO: where to put tasks
  getUsersTasksInGroupFail = error => ({
    type: types.GET_USERS_GROUP_TASKS_FAIL,
    error: error
  }),
  updateTaskSuccess = task => ({
    type: types.UPDATE_TASK_SUCCESS,
    task: task
  }), //TODO: WHERE to put this
  updateTaskFail = error => ({ type: types.UPDATE_TASK_FAIL, error: error }),
  getGroupsTasksSuccess = tasks => ({
    type: types.GET_GROUP_TASKS_SUCCESS,
    tasks: tasks
  }),
  getGroupsTasksFail = error => ({
    type: types.GET_GROUP_TASKS_FAIL,
    error: error
  });
