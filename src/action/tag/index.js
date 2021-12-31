import * as Types from "./../../constant/Type";
import axios from "./../../utils/customAxios";

export const getAllTagRequest = () => {
    return (dispatch) => {
        return axios.get('tag').then((res) => {
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
