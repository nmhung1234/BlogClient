import * as Types from '../constant/Type'
const initialState = [];

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.TOAST_SUCCESS: {
            return {
                type: "success",
                message: action.payload
            }
        }
        case Types.TOAST_INFO: {
            return {
                type: "info",
                message: action.payload
            }
        }
        case Types.TOAST_WARNING: {
            return {
                type: "warning",
                message: action.payload
            }
        }
        case Types.TOAST_ERROR: {
            return {
                type: "error",
                message: action.payload
            }
        }
        default:
            return {
                type: "",
                message: ""
            }
    }
};

export default myReducer;