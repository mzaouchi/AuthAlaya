import {combineReducers} from "redux"
import AuthReducer from "./AuthReducer"
import ErrorReducer from "./ErrorReducer"
const rootReducer = combineReducers({AuthReducer,ErrorReducer})

export default rootReducer