import * as Types from "./../constant/Type";
import axios from "./../utils/customAxios";

// export const getAllTagRequest = () => {
//     return (dispatch) => {
//         return axios.get('/upload/tag').then((res) => {
//             dispatch(getAllTag(res));
//         })
//     }
// }
// export const getAllTag = (response) => {
//     return {
//         type: Types.GET_ALL_TAG,
//         response
//     }
// }


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