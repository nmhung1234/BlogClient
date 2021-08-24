import * as Types from "./../constant/Type";
import axios from "./../utils/customAxios";

export const getListPostRequest = () => {
    return (dispatch) => {
        return axios.get('/post?limit=5&page=1').then((res) => {
            dispatch(getListPost(res));
        })
    }
}
export const getListPost = (response) => {
    return {
        type: Types.GET_HOME_POST,
        response
    }
}

export const upPostRequest = (data) => {
    return (dispatch) => {
        return axios.post('/post', data).then((res) => {
            dispatch(upPost(res));
        })
    }
}
export const upPost = (response) => {
    return {
        type: Types.UP_POST,
        response
    }
}

export const getAllTagRequest = () => {
    return (dispatch) => {
        return axios.get('/upload/tag').then((res) => {
            dispatch(getAllTag(res));
        })
    }
}
export const getAllTag = (response) => {
    return {
        type: Types.GET_ALL_TAG,
        response
    }
}


// export const getDetailPostRequest = (data) => {
//     return (dispatch) => {
//         return axios.get('/post/detail', data).then((res) => {
//             dispatch
//         })
//     }
// }
// export const getDetailPost = (response) => {
//     return {
//         type: Types.GET_DETAIL_POST,
//         response
//     }
// }