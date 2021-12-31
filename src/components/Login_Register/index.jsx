import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { CloseCircle } from "iconsax-react";
import { loginRequest } from "../../action/auth";
// import "./style.scss";
import { LoginRegisterStyle } from "./styles.js";
function LoginRegister(props) {
    const { actionProp, loginDispatch } = props;

    const [actionState, setActionState] = React.useState("cancel");
    const [formValue, setFormValue] = React.useState({
        usernameLogin: "",
        passwordLogin: "",
        emailRegister: "",
        usernameRegister: "",
        passwordRegister: "",
        cfpasswordRegister: "",
        emailRecovery: "",
    });
    const handlAction = (action) => {
        if (action == "login") {
            setActionState("login");
        } else if (action == "register") {
            setActionState("register");
        } else if (action == "recovery") {
            setActionState("recovery");
        } else {
            setActionState("cancel");
        }
    };

    const onHandleChange = (e) => {
        const value = e.target.value;
        setFormValue((pre) => {
            return {
                ...pre,
                [e.target.name]: value,
            };
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formName = event.target.id;
        if (formName == "login") {
            const formData = {
                username: formValue.usernameLogin,
                password: formValue.passwordLogin,
            };
            loginDispatch(formData);
        } else if (formName == "register") {
            const formData = {
                username: formValue.usernameRegister,
                password: formValue.passwordRegister,
                email: formValue.emailRegister,
            };
        } else if (formName == "recovery") {
            const formData = {
                email: formValue.emailRecovery,
            };
        }
    };
    
    React.useEffect(() => {
        if (actionProp != 0) {
            setActionState("login");
        }
    }, [actionProp]);

    React.useEffect(() => {
        if (actionState !== "cancel") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [actionState]);
    return (
        <>
            <LoginRegisterStyle toggle={actionState == "cancel" ? "hide" : "login_Container"}>
                <div className="login-dialog bd-radius-5 pd-20">
                    <CloseCircle
                        className="cancel-form"
                        size="25"
                        color="currentColor"
                        onClick={() => handlAction("cancel")}
                    />
                    <div className="anim-icon">
                        <lottie-player
                            src="https://assets3.lottiefiles.com/packages/lf20_gtnyu482.json"
                            background-color="transparent"
                            speed="1"
                            style={{ width: "300px", height: "300px" }}
                            autoplay
                            loop
                        ></lottie-player>
                    </div>
                    <div className="form fd-c mg-20">
                        <div
                            className={
                                actionState == "login"
                                    ? "login show"
                                    : "login hide"
                            }
                        >
                            <h1
                                className="mg-10"
                                style={{ marginBottom: "40px" }}
                            >
                                Đăng nhập{" "}
                            </h1>
                            <form id="login" onSubmit={handleSubmit}>
                                <div className="field mgb-10">
                                    <label
                                        className="pdb-5"
                                        htmlFor="usernameLogin"
                                        style={{ fontSize: "14px" }}
                                    >
                                        Username
                                    </label>
                                    <input
                                        value={formValue.usernameLogin}
                                        name="usernameLogin"
                                        className="input"
                                        type="text"
                                        placeholder="VD: devvietnam"
                                        required
                                        onChange={onHandleChange}
                                    />
                                </div>
                                <div className="field mgb-10">
                                    <label
                                        className="pdb-5"
                                        htmlFor="passwordLogin"
                                        style={{ fontSize: "14px" }}
                                    >
                                        Mật khẩu
                                    </label>
                                    <input
                                        value={formValue.passwordLogin}
                                        name="passwordLogin"
                                        className="input"
                                        type="password"
                                        placeholder="Mật khẩu"
                                        required
                                        onChange={onHandleChange}
                                    />
                                </div>
                                <button className="button-sm mgt-20 mgb-20">
                                    Đăng nhập
                                </button>
                            </form>
                            <Link to="#">
                                <div
                                    style={{
                                        fontSize: "12px",
                                        textAlign: "left",
                                    }}
                                    className="mgt-5  hover-text"
                                    onClick={() => handlAction("recovery")}
                                >
                                    Quên mật khẩu
                                </div>
                            </Link>
                            <Link to="#">
                                <div
                                    style={{
                                        fontSize: "12px",
                                        textAlign: "left",
                                    }}
                                    className="mgt-5 hover-text"
                                    onClick={() => handlAction("register")}
                                >
                                    Đăng kí tài khoản
                                </div>
                            </Link>
                        </div>
                        <div
                            className={
                                actionState == "register"
                                    ? "register show"
                                    : "register hide"
                            }
                        >
                            <h1
                                className="mg-10"
                                style={{ marginBottom: "40px" }}
                            >
                                Đăng ký{" "}
                            </h1>
                            <form id="register" onSubmit={handleSubmit}>
                                <div className="field mgb-10">
                                    <label
                                        className="pdb-5"
                                        htmlFor="emailRegister"
                                        style={{ fontSize: "14px" }}
                                    >
                                        Email
                                    </label>
                                    <input
                                        value={formValue.emailRegister}
                                        name="emailRegister"
                                        className="input"
                                        type="email"
                                        placeholder="VD: devvietnam@gmail.com"
                                        required
                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                        title="VD: devvietnam@gmail.com"
                                        onChange={onHandleChange}
                                    />
                                </div>
                                <div className="field mgb-10">
                                    <label
                                        className="pdb-5"
                                        htmlFor="usernameRegister"
                                        style={{ fontSize: "14px" }}
                                    >
                                        Username
                                    </label>
                                    <input
                                        value={formValue.usernameRegister}
                                        name="usernameRegister"
                                        className="input"
                                        type="text"
                                        placeholder="VD: devvietnam"
                                        required
                                        onChange={onHandleChange}
                                    />
                                </div>
                                <div className="field mgb-10">
                                    <label
                                        className="pdb-5"
                                        htmlFor="passwordRegister"
                                        style={{ fontSize: "14px" }}
                                    >
                                        Mật khẩu
                                    </label>
                                    <input
                                        value={formValue.passwordRegister}
                                        name="passwordRegister"
                                        className="input"
                                        type="password"
                                        placeholder="Mật khẩu"
                                        required
                                        onChange={onHandleChange}
                                        pattern=".{8,}"
                                        title="Tối thiểu 8 ký tự"
                                    />
                                </div>
                                <div className="field mgb-10">
                                    <label
                                        className="pdb-5"
                                        htmlFor="cfpasswordRegister"
                                        style={{ fontSize: "14px" }}
                                    >
                                        Xác nhận mật khẩu
                                    </label>
                                    <input
                                        value={formValue.cfpasswordRegister}
                                        name="cfpasswordRegister"
                                        className="input"
                                        type="password"
                                        placeholder="Xác nhận mật khẩu"
                                        required
                                        onChange={onHandleChange}
                                        pattern=".{8,}"
                                        title="Tối thiểu 8 ký tự và giống mật khẩu"
                                    />
                                </div>
                                <button className="button-sm mgt-20 mgb-20">
                                    Đăng ký
                                </button>
                            </form>
                            <Link to="#">
                                <div
                                    style={{
                                        fontSize: "12px",
                                        textAlign: "left",
                                    }}
                                    className="mgt-5  hover-text"
                                    onClick={() => handlAction("recovery")}
                                >
                                    Quên mật khẩu
                                </div>
                            </Link>{" "}
                            <Link to="#">
                                <div
                                    style={{
                                        fontSize: "12px",
                                        textAlign: "left",
                                    }}
                                    className="mgt-5 hover-text"
                                    onClick={() => handlAction("login")}
                                >
                                    Quay lại đăng nhập
                                </div>
                            </Link>
                        </div>
                        <div
                            className={
                                actionState == "recovery"
                                    ? "recovery show"
                                    : "recovery hide"
                            }
                        >
                            <h1
                                className="mg-10"
                                style={{ marginBottom: "40px" }}
                            >
                                Khôi phục tài khoản{" "}
                            </h1>
                            <form id="recovery" onSubmit={handleSubmit}>
                                <div className="field mgb-10">
                                    <label
                                        className="pdb-5"
                                        htmlFor="emailRecovery"
                                        style={{ fontSize: "14px" }}
                                    >
                                        Email
                                    </label>
                                    <input
                                        value={formValue.emailRecovery}
                                        name="emailRecovery"
                                        className="input"
                                        type="email"
                                        placeholder="VD: devvietnam@gmail.com"
                                        required
                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                        onChange={onHandleChange}
                                    />
                                </div>

                                <button className="button-sm mgt-20 mgb-20">
                                    Khôi phục
                                </button>
                            </form>
                            <Link to="#">
                                <div
                                    style={{
                                        fontSize: "12px",
                                        textAlign: "left",
                                    }}
                                    className="mgt-5 hover-text"
                                    onClick={() => handlAction("login")}
                                >
                                    Quay lại đăng nhập
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </LoginRegisterStyle>
        </>
    );
}
// const mapStateToProps = (state) => {}
const mapDispatchToProps = (dispatch) => {
    return {
        loginDispatch: (data) => {
            dispatch(loginRequest(data));
        },
    };
};

LoginRegister.propTypes = {};

export default connect(null, mapDispatchToProps)(LoginRegister);
