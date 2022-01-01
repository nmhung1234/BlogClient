import axios from "./../../utils/customAxios";
import * as Types from "./../../constant/Type";

export const getUserDataRequest = (username) => (dispatch) => {
    return axios.get(`user?username=${username}`)
        .then((res) => {
            dispatch(getUserData(res));
        })
        .catch((err) => {
            return err
        })
}

export const getUserData = (response) => {
    return {
        type: Types.GET_USER_DATA,
        response
    }
}
