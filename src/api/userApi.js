import axios from "axios";
import { backendServerURI } from "../config/config";

class User {
  static async authenticate(credentials) {
    try {
      return Promise.resolve(
        await axios.post(backendServerURI + "login", credentials)
      );
    } catch (err) {
      return Promise.reject(err.response);
    }
  }

  static async signUp(user) {
    try {
      return Promise.resolve(
        await axios.post(backendServerURI + "signup", user)
      );
    } catch (err) {
      return Promise.reject(err.response);
    }
  }
}

export default User;
