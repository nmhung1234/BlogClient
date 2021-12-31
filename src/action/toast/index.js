import * as Types from './../../constant/Type';

export const toastSuccess = (payload) => {
    return {
        type: Types.TOAST_SUCCESS,
        payload
    };
};
export const toastInfo = (payload) => {
    return {
        type: Types.TOAST_INFO,
        payload
    };
};
export const toastWarning = (payload) => {
    return {
        type: Types.TOAST_WARNING,
        payload
    };
}
export const toastError = (payload) => {
    return {
        type: Types.TOAST_ERROR,
        payload
    };
}