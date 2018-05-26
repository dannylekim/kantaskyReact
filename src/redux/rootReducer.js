//Combines all reducers for the store and exports

import UserReducer from "./user/userReducer";
import GroupReducer from "./group/groupReducer";
import TaskReducer from "./task/taskReducer";
import ToasterReducer from "./toaster/toasterReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  user: UserReducer,
  group: GroupReducer,
  task: TaskReducer,
  toaster: ToasterReducer
});

export default rootReducer;
