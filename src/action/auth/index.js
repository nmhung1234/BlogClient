import axios from "./../../utils/customAxios";
import * as Types from "./../../constant/Type";

export const loginRequest = (data) => (dispatch) => {
    return axios.post('login', data)
        .then((res) => {
            dispatch(login(res));
            return res;
        })
        .catch((err) => {
            return err;
        })
}

export const login = (response) => {
    return {
        type: Types.LOGIN,
        response
    }
}
export const logout = () => {
    return {
        type: Types.LOGOUT,
    }
}