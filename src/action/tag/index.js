import axios from "./../../utils/customAxios";
import * as Types from "./../../constant/Type";

export const getAllTagRequest = () => (dispatch) => {
    return axios.get('tag')
        .then((res) => {
            dispatch(getAllTag(res));
            return res;
        })
        .catch((err) => {
            return err
        })
}

export const getAllTag = (response) => {
    return {
        type: Types.GET_ALL_TAG,
        response
    }
}
