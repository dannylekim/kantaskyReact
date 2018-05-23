//This is the reducer that assigns states depending on the action received.

import * as types from "./toasterActionTypes";

let initial = { errMsg: [], msg: [], count: 0 };

const reducer = (state = initial, action) => {
  switch (action.type) {
    case types.TOAST_ERROR:
      const errMsgObj = {
        message: action.message,
        id: state.count
      };
      let newErrMsgArray = [...state.errMsg, errMsgObj];
      return Object.assign({}, state, {
        errMsg: newErrMsgArray,
        count: state.count + 1
      });
    case types.TOAST_SUCCESS:
      const msgObj = {
        message: action.message,
        id: state.count
      };
      let newMsgArray = [...state.msg, msgObj];
      return Object.assign({}, state, {
        msg: newMsgArray,
        count: state.count + 1
      });
    case types.DELETE_TOAST_ERROR:
      const removedErrMsg = state.errMsg.filter(message => {
        return message.id !== action.id;
      });
      return Object.assign({}, state, {
        errMsg: removedErrMsg
      });
    case types.DELETE_TOAST_SUCCESS:
      const removedMsg = state.msg.filter(message => {
        return message.id !== action.id;
      });
      return Object.assign({}, state, {
        msg: removedMsg
      });
    default:
      return state;
  }
};
export default reducer;
