import axios from "axios";
import { backendServerURI } from "../config/config";

class User {


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
      return Promise.resolve(
        await axios.post(backendServerURI + "login", credentials)
      );
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
      return Promise.resolve(
        await axios.post(backendServerURI + "signup", user)
      );
    } catch (err) {
      return Promise.reject(err.response);
    }
  }

  /**
   * Updates User's email, first Name and Last name
   * 
   * @static
   * @param {any} userId 
   * @returns Success Message
   * @memberof User
   */
  static async updateUser(userId) {
    try {
      return Promise.resolve(
        await axios.put(backendServerURI + "users/" + userId)
      );
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
  static async changePassword(userId) {
    try {
      return Promise.resolve(
        await axios.put(backendServerURI + "changePassword/" + userId)
      );
    } catch (err) {
      return Promise.reject(err.response);
    }
  }
}

export default User;
