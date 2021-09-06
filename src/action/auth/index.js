import * as Types from "./../../constant/Type";
import axios from "./../../utils/customAxios";

export const loginRequest = (data) => {
    return (dispatch) => {
        return axios.post('api/login', data).then((res) => {
            dispatch(login(res));
        })
    }
}
export const login = (response) => {
    return {
        type: Types.LOGIN,
        response
    }
}