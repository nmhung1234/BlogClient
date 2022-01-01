import axios from "./../../utils/customAxios";
import * as Types from "./../../constant/Type";

export const getListPostRequest = () => (dispatch) => {
    return axios.get('post?limit=5&page=1')
        .then((res) => {
            dispatch(getListPost(res));
            return res
        })
        .catch((err) => {
            return err
        })
}
export const getListPost = (response) => {
    return {
        type: Types.GET_HOME_POST,
        response
    }
}

export const upPostRequest = (data) => (dispatch) => {
    return axios.post('post', data)
        .then((res) => {
            dispatch(upPost(res));
            return res;
        })
        .catch((err) => {
            return err
        })
}
export const upPost = (response) => {
    return {
        type: Types.UP_POST,
        response
    }
}
