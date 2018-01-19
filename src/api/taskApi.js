import axios from "axios";
import { backendServerURI } from "../config/config";

class Task {

  /**
   * Gets all the personal tasks that belong to the user
   * 
   * @static
   * @param {any} userId 
   * @returns Personal Task Object
   * @memberof Task
   */
  static async getPersonalTasks(userId) {
    try {
      return Promise.resolve(
        await axios.get(backendServerURI + "tasks/" + userId)
      );
    } catch (err) {
      return Promise.reject(err.response);
    }
  }

  /**
   * Creates a task inside the group
   * 
   * @static
   * @param {any} groupId 
   * @param {any} userId 
   * @returns Updated Group
   * @memberof Task
   */
  static async createTaskInGroup(groupId, userId) {
    try {
      return Promise.resolve(
        await axios.post(backendServerURI + "tasks/" + groupId + "/" + userId)
      );
    } catch (err) {
      return Promise.reject(err.response);
    }
  }


  /**
   * Get all of the user's tasks in group
   * 
   * @static
   * @param {any} groupId 
   * @param {any} userId 
   * @returns Tasks Object
   * @memberof Task
   */
  static async getUsersTasksInGroup(groupId, userId) {
    try {
      return Promise.resolve(
        await axios.get(backendServerURI + "tasks/" + groupId + "/" + userId)
      );
    } catch (err) {
      return Promise.reject(err.response);
    }
  }

  /**
   * Update the task
   * 
   * @static
   * @param {any} taskId 
   * @returns Task
   * @memberof Task
   */
  static async updateTask(taskId) {
    try {
      return Promise.resolve(
        await axios.put(backendServerURI + "tasks/" + taskId)
      );
    } catch (err) {
      return Promise.reject(err.response);
    }
  }

  /**
   * Delete the task
   * 
   * @static
   * @param {any} taskId 
   * @returns Deleted Message
   * @memberof Task
   */
  static async deleteTask(taskId) {
    try {
      return Promise.resolve(
        await axios.get(backendServerURI + "tasks/" + taskId)
      );
    } catch (err) {
      return Promise.reject(err.response);
    }
  }
}

export default Task;
