import axios from "axios";

class Task {

//================ POST REQUESTS ======================

  /**
   * Creates a task inside the group
   * 
   * @static
   * @param {any} groupId 
   * @param {any} userId 
   * @returns Updated Group
   * @memberof Task
   */
  static async createTaskInGroup(groupId, userId, task) {
    try {
      return Promise.resolve(
        await axios.post("tasks/" + groupId + "/" + userId, task)
      );
    } catch (err) {
      return Promise.reject(err.response);
    }
  }

//================ PUT REQUESTS ======================

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
        await axios.put("tasks/" + taskId)
      );
    } catch (err) {
      return Promise.reject(err.response);
    }
  }


//================ GET REQUESTS ======================
  
  /**
   * Gets all the personal tasks that belong to the user
   * 
   * @static
   * @param {any} userId 
   * @returns Personal Task Object
   * @memberof Task
   */
  static async getUsersTasks(userId) {
    try {
      return Promise.resolve(
        await axios.get("tasks/" + userId)
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
        await axios.get("tasks/" + groupId + "/" + userId)
      );
    } catch (err) {
      return Promise.reject(err.response);
    }
  }

  /**
   * Get all tasks in group
   * 
   * @static
   * @param {any} groupId 
   * @returns 
   * @memberof Task
   */
  static async getGroupsTasks(groupId) {
    try{
      return Promise.resolve(
        await axios.get("tasks/groupTasks/" + groupId)
      )
    }
    catch(err){
      return Promise.reject(err.response)
    }
  }

//================ DELETE REQUESTS ======================
  /**
   * Delete the task
   * 
   * @static
   * @param {any} taskId 
   * @returns Deleted Message
   * @memberof Task
   */
  static async removeTask(taskId) {
    try {
      return Promise.resolve(
        await axios.delete("tasks/" + taskId)
      );
    } catch (err) {
      return Promise.reject(err.response);
    }
  }
}

export default Task;
