//Combines all reducers for the store and exports

import UserReducer from "./user/userReducer";
import GroupReducer from "./group/groupReducer";
import TaskReducer from "./task/taskReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  user: UserReducer,
  group: GroupReducer,
  task: TaskReducer
});

export default rootReducer;
