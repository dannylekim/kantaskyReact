import axios from "axios";

class User {
  //================ POST REQUESTS ======================

  /**
   * Authenticates User.
   *
   * @static
   * @param {any} credentials
   * @returns Message and Token
   * @memberof User
   */
  static async authenticate(credentials) {
    try {
      return Promise.resolve(await axios.post("login", credentials));
    } catch (err) {
      return Promise.reject(err.response);
    }
  }

  /**
   * Creates a new user.
   *
   * @static
   * @param {any} user
   * @returns User Object
   * @memberof User
   */
  static async signUp(user) {
    try {
      return Promise.resolve(await axios.post("signup", user));
    } catch (err) {
      return Promise.reject(err.response);
    }
  }

  //================ PUT REQUESTS ======================

  /**
   * Updates User's email, first Name and Last name
   *
   * @static
   * @param {any} userId
   * @returns Success Message
   * @memberof User
   */
  static async updateUser(updatedUser, userId) {
    try {
      return Promise.resolve(await axios.put("users/" + userId, updatedUser));
    } catch (err) {
      return Promise.reject(err.response);
    }
  }

  /**
   * Updates Password
   *
   * @static
   * @param {any} userId
   * @returns Success Message
   * @memberof User
   */
  static async changePassword(password, userId) {
    try {
      return Promise.resolve(
        await axios.put("changePassword/" + userId, password)
      );
    } catch (err) {
      return Promise.reject(err.response);
    }
  }

  //================ GET REQUESTS ======================

  /**
   * Gets the associated user Id. Requester can only take his own
   *
   * @static
   * @param {any} userId
   * @returns
   * @memberof User
   */
  static async getUser(userId) {
    try {
      return Promise.resolve(await axios.get("users/" + userId));
    } catch (err) {
      return Promise.reject(err.response);
    }
  }

  /**
   * Search for a user by email
   *
   * @static
   * @param {any} userId
   * @returns
   * @memberof User
   */
  static async searchUser(email) {
    try {
      return Promise.resolve(await axios.get("/searchUser/" + email));
    } catch (err) {
      return Promise.reject(err.response);
    }
  }

  /**
   * Invites the user to the target group Id
   * 
   * @static
   * @param {any} targetGroupId 
   * @param {any} invitedUserId 
   * @returns 
   * @memberof User
   */
  static async inviteUser(targetGroupId, invitedUserId) {
    try {
      return Promise.resolve(
        await axios.get(`/invite/${invitedUserId}/${targetGroupId}`)
      );
    } catch (err) {
      return Promise.reject(err.response);
    }
  }
}

export default User;
