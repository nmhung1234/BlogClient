import { combineReducers } from "redux";
import auth from "./auth";
import post from "./post";
import tag from "./tag";
import toast from "./toast";

export default combineReducers({
    auth,
    post,
    tag,
    toast
})