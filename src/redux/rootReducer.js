import UserReducer from "./user/userReducer";
import {combineReducers} from "redux"

const rootReducer = combineReducers({user: UserReducer})

export default rootReducer