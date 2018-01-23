import groupApi from "../../api/groupApi";
import { getGroup } from "./groupActions";
import { history } from "../../config/config";


export const getUsersGroups = userId => async dispatch => {
  try {
    const response = await groupApi.getUsersGroups(userId); //api call to login
    dispatch(getGroup(response.data)); //dispatch the successful login call
  } catch (err) {
    //TODO:
  }
};

