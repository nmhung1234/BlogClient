import * as Types from './../constant/Type';
var initialState = {};


const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.REGISTER_ACCOUNT: {
            if (action.response.data.success) {
                swal({
                    title: 'Đăng ký thành công!',
                    text: `Kiểm tra email của bạn để xác thực tài khoản`,
                    icon: 'success',
                    buttons: {
                        cancel: true,
                    },
                });
            } else {
                swal({
                    title: 'Oops!',
                    text: `Đã xảy ra lỗi! Mã lỗi: ${action.response.data.message}`,
                    icon: 'error',
                    buttons: {
                        cancel: true,
                    },
                });
            }
            return state;
        }

        case Types.VERIFY_ACCOUNT: {
            console.log(action);
            if (action.response.data.success) {
                swal({
                    title: 'Xác nhận tài khoản thành công!',
                    text: `Vui lòng quay lại trang đăng nhập`,
                    icon: 'success',
                    buttons: {
                        cancel: true,
                    },
                });
            }
            return state;
        }
        case Types.RESET_PASSWORD: {
            // console.log(action.response.data.success);
            if (action.response.data.success) {
                swal({
                    title: 'Đặt lại mật khẩu!',
                    text: `Kiểm tra Email của bạn`,
                    icon: 'success',
                    buttons: {
                        cancel: true,
                    },
                });
            } else {
                swal({
                    title: 'Oops!',
                    text: `Đã xảy ra lỗi! Mã lỗi: ${action.response.data.message}`,
                    icon: 'error',
                    buttons: {
                        cancel: true,
                    },
                });
            }
            return state;
        }

        case Types.VERIFY_PASSWORD: {
            // console.log(action.response.data.success);
            if (action.response.data.success) {
                swal({
                    title: 'Yaaa!',
                    text: `Đặt lại mật khẩu thành công, vui lòng quay lại trang đăng nhập`,
                    icon: 'success',
                    buttons: {
                        cancel: true,
                    },
                });
            } else {
                swal({
                    title: 'Oops!',
                    text: `Đã xảy ra lỗi! Mã lỗi: ${action.response.data.message}`,
                    icon: 'error',
                    buttons: {
                        cancel: true,
                    },
                });
            }
            return state;
        }
        case Types.LOGIN: {
            console.log(action.response);
            if (action.response.data.success) {
                localStorage.setItem('tk', action.response.data.data.token);
                localStorage.setItem('rtk', action.response.data.data.refreshToken);
                state = action.response.data.data.userData;
            }
            return state;
        }
        case Types.GET_USER_DATA: {
            console.log(action.response);
            if (action.response.data.success) {
                state = action.response.data.data[0];
                return state;
            }
            return state;
        }
        case Types.LOGOUT: {
            localStorage.clear();
            state = { data: { token: null } };
            return state;
        }
        default:
            return state;
    }
};

export default myReducer;