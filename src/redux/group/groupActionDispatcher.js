import groupApi from "../../api/groupApi";
import { getGroup } from "./groupActions";
import { history } from "../../config/config";

/**
 * Logs the user in with the credentials and sends either a successful or fail action to the reducer
 *
 * @param {any} credentials takes username and password as properties
 */
export const getUsersGroups = userId => async dispatch => {
  try {
    const response = await groupApi.getUsersGroups(userId); //api call to login
    dispatch(getGroup(response.data)); //dispatch the successful login call
  } catch (err) {
    //TODO:
  }
};

