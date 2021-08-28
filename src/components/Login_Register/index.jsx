import React from "react";
import { Link } from "react-router-dom";
import CancelIcon from "./../../assets/icons/x.svg";
import PropTypes from "prop-types";
import "./style.css";
function LoginRegister(props) {
    const { actionProp } = props;

    const [actionState, setActionState] = React.useState(actionProp);
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
    React.useEffect(() => {
        setActionState(actionProp);
    }, [actionProp]);
    return (
        <>
            <div
                className="login_Container"
                className={actionState == "cancel" ? "hide" : "login_Container"}
            >
                <div className="login-dialog df bd-radius-5 pd-20">
                    <img
                        className="cancel-form"
                        src={CancelIcon}
                        alt=""
                        onClick={() => handlAction("cancel")}
                    />
                    <div className="anim-icon">
                        <lottie-player
                            src="https://assets5.lottiefiles.com/packages/lf20_y33ep5da.json"
                            background="transparent"
                            speed="1"
                            style={{ width: "400px", height: "400px" }}
                            autoplay
                        ></lottie-player>
                    </div>
                    <div className="form df fd-c justify-fs pdb-10">
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
                            <div className="df fd-c align-fs mgb-10">
                                <label
                                    className="pdb-5"
                                    htmlFor="username"
                                    style={{ fontSize: "14px" }}
                                >
                                    Username
                                </label>
                                <input
                                    name="username"
                                    className="input"
                                    type="text"
                                    placeholder="VD: devvietnam"
                                    required
                                />
                            </div>
                            <div className="df fd-c align-fs mgb-10">
                                <label
                                    className="pdb-5"
                                    htmlFor="password"
                                    style={{ fontSize: "14px" }}
                                >
                                    Mật khẩu
                                </label>
                                <input
                                    name="password"
                                    className="input"
                                    type="password"
                                    placeholder="Mật khẩu"
                                    required
                                />
                            </div>
                            <div className="button-sm mgt-20 mgb-20">
                                Đăng nhập
                            </div>
                            <Link to="#">
                                <div
                                    style={{
                                        fontSize: "12px",
                                        textAlign: "left",
                                    }}
                                    className="mgt-5  hover-primary"
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
                                    className="mgt-5 hover-primary"
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
                            <div className="df fd-c align-fs mgb-10">
                                <label
                                    className="pdb-5"
                                    htmlFor="email"
                                    style={{ fontSize: "14px" }}
                                >
                                    Email
                                </label>
                                <input
                                    name="email"
                                    className="input"
                                    type="email"
                                    placeholder="VD: devvietnam@gmail.com"
                                    required
                                />
                            </div>
                            <div className="df fd-c align-fs mgb-10">
                                <label
                                    className="pdb-5"
                                    htmlFor="username"
                                    style={{ fontSize: "14px" }}
                                >
                                    Username
                                </label>
                                <input
                                    name="username"
                                    className="input"
                                    type="text"
                                    placeholder="VD: devvietnam"
                                    required
                                />
                            </div>
                            <div className="df fd-c align-fs mgb-10">
                                <label
                                    className="pdb-5"
                                    htmlFor="password"
                                    style={{ fontSize: "14px" }}
                                >
                                    Mật khẩu
                                </label>
                                <input
                                    name="password"
                                    className="input"
                                    type="password"
                                    placeholder="Mật khẩu"
                                    required
                                />
                            </div>
                            <div className="df fd-c align-fs mgb-10">
                                <label
                                    className="pdb-5"
                                    htmlFor="cfpassword"
                                    style={{ fontSize: "14px" }}
                                >
                                    Xác nhận mật khẩu
                                </label>
                                <input
                                    name="cfpassword"
                                    className="input"
                                    type="password"
                                    placeholder="Xác nhận mật khẩu"
                                    required
                                />
                            </div>
                            <div className="button-sm mgt-20 mgb-20">
                                Đăng ký
                            </div>
                            <Link to="#">
                                <div
                                    style={{
                                        fontSize: "12px",
                                        textAlign: "left",
                                    }}
                                    className="mgt-5  hover-primary"
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
                                    className="mgt-5 hover-primary"
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
                            <div className="df fd-c align-fs mgb-10">
                                <label
                                    className="pdb-5"
                                    htmlFor="username"
                                    style={{ fontSize: "14px" }}
                                >
                                    Email
                                </label>
                                <input
                                    name="username"
                                    className="input"
                                    type="text"
                                    placeholder="VD: devvietnam@gmail.com"
                                    required
                                />
                            </div>

                            <div className="button-sm mgt-20 mgb-20">
                                Khôi phục
                            </div>

                            <Link to="#">
                                <div
                                    style={{
                                        fontSize: "12px",
                                        textAlign: "left",
                                    }}
                                    className="mgt-5 hover-primary"
                                    onClick={() => handlAction("login")}
                                >
                                    Quay lại đăng nhập
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

LoginRegister.propTypes = {};

export default LoginRegister;
