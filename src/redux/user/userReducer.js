
import * as types from "./userActionTypes";
// import { login } from "./userActionDispatcher";

import initial from "./userInitialState";


const reducer = (state = initial, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, { token: action.token });
    case types.LOGIN_FAIL:
      return Object.assign({}, state, { error: action.error });
    default:
      return state;
  }
};
export default reducer;
