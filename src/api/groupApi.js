import axios from "axios";

class Group {
  //================ POST REQUESTS ======================

  /**
   * Create a new group
   *
   * @static
   * @param {any} userId
   * @returns New Group
   * @memberof Group
   */
  static async createGroup(userId, newGroup) {
    try {
      return Promise.resolve(await axios.post("groups/" + userId, newGroup));
    } catch (err) {
      return Promise.reject(err.response);
    }
  }

  //================ PUT REQUESTS ======================

  /**
   * Updates the Group. Can change team leader, users and group name
   *
   * @static
   * @param {any} groupId
   * @returns
   * @memberof Group
   */
  static async updateGroup(updatedGroup, groupId) {
    try {
      return Promise.resolve(
        await axios.put("groups/" + groupId, updatedGroup)
      );
    } catch (err) {
      return Promise.reject(err.response);
    }
  }

  //================ GET REQUESTS ======================

  /**
   * Gets the specified Group
   *
   * @static
   * @param {any} groupId
   * @returns Group Object
   * @memberof Group
   */
  static async getGroup(groupId) {
    try {
      return Promise.resolve(await axios.get("groups/" + groupId));
    } catch (err) {
      return Promise.reject(err.response);
    }
  }

  /**
   * Gets all groups
   *
   * @static
   * @param {any} userId
   * @returns
   * @memberof Group
   */
  static async getAllUsersGroups(userId) {
    try {
      return Promise.resolve(await axios.get("groups/" + userId));
    } catch (err) {
      return Promise.reject(err.response);
    }
  }

  static async joinGroup(groupId) {
    try {
      return Promise.resolve(await axios.get("join/" + groupId));
    } catch (err) {
      return Promise.reject(err.response);
    }
  }

  //================ DELETE REQUESTS ======================

  /**
   * Deletes the group
   *
   * @static
   * @param {any} groupId
   * @returns Deleted Message
   * @memberof Group
   */
  static async deleteGroup(groupId) {
    try {
      return Promise.resolve(await axios.delete("groups/" + groupId));
    } catch (err) {
      return Promise.reject(err.response);
    }
  }

  //============== POST REQUESTS ==============================

  /**
   * Leave the group
   *
   * @static
   * @param {any} groupId

   * @memberof Group
   */
  static async leaveGroup(groupId, newTeamLeader) {
    try {
      return Promise.resolve(
        await axios.post("groups/leave/" + groupId, newTeamLeader)
      );
    } catch (err) {
      return Promise.reject(err.response);
    }
  }
}

export default Group;
