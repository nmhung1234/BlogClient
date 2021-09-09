import * as Types from "./../../constant/Type";
import axios from "./../../utils/customAxios";

export const getUserDataRequest = (username) => {
    return (dispatch) => {
        return axios.get(`api/user?username=${username}`).then((res) => {
            dispatch(getUserData(res));
        })
    }
}
export const getUserData = (response) => {
    return {
        type: Types.GET_USER_DATA,
        response
    }
}
