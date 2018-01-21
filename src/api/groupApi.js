import axios from "axios";
import { backendServerURI } from "../config/config";

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
  static async createGroup(userId) {
    try {
      return Promise.resolve(
        await axios.post(backendServerURI + "groups/" + userId)
      );
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
  static async updateGroup(groupId) {
    try {
      return Promise.resolve(
        await axios.put(backendServerURI + "groups/" + groupId)
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
      return Promise.resolve(
        await axios.get(backendServerURI + "groups/" + groupId)
      );
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
      return Promise.resolve(
        await axios.delete(backendServerURI + "groups/" + groupId)
      );
    } catch (err) {
      return Promise.reject(err.response);
    }
  }
}

export default Group;
