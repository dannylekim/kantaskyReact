//This is the reducer that assigns states depending on the action received. 

import * as types from "./userActionTypes";
import initial from "./userInitialState";

const reducer = (state = initial, action) => {
  switch (action.type) {

    //on a successful login, it will set the token, null all errors and authenticate the user.
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, { token: action.token, error: null, authenticated: true });

    //on fail, post the error
    case types.LOGIN_FAIL:
      return Object.assign({}, state, { error: action.error });
    
    //null token and unauthenticates the user
    case types.LOGOUT:
      return Object.assign({}, state, { token: null, authenticated: false });
    default:
      return state;
  }
};
export default reducer;
