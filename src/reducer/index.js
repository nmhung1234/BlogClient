import { combineReducers } from "redux";
import auth from "./auth";
import post from "./post";
import tag from "./tag"

export default combineReducers({
    auth,
    post,
    tag
})