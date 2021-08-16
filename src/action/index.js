import * as Types from "./../constant/Type";
import axios from "./../utils/customAxios";

export const getListPostRequest = () => {
    return (dispatch) => {
        return axios.get('/post?limit=8&page=2').then((res) => {
            dispatch(getListPost(res));
        })
    }
}
export const getAllTagRequest = () => {
    return (dispatch) => {
        return axios.get('/upload/tag').then((res) => {
            dispatch(getAllTag(res));
        })
    }
}
export const getListPost = (response) => {
    return {
        type: Types.GET_HOME_POST,
        response
    }
}
export const getAllTag = (response) => {
    return {
        type: Types.GET_ALL_TAG,
        response
    }
}