import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Share, NotificationCircle, SearchStatus } from "iconsax-react";
import LoginRegister from "./../Login_Register";

import { logout } from "../../action/auth";
import logoIcon from "./../../logo.svg";

import "./style.scss";

function Header(props) {
    const { userData, logoutRequest } = props;
    const [actionState, setActionState] = React.useState(0);
    const [userDataState, setUserDataState] = React.useState();
    const num = React.useRef(1);
    const handleLoginForm = (action) => {
        setActionState(num.current);
        num.current++;
    };
    // nếu có data thì set tên vào popup user
    React.useEffect(() => {
        setUserDataState(userData);
    }, [userData]);
    const handleLogout = () => {
        logoutRequest();
    };
    return (
        <>
            <div className="nav">
                <div className="wrapper">
                    {userData?._id ? (
                        ""
                    ) : (
                        <LoginRegister actionProp={actionState} />
                    )}
                    <div className="left">
                        <Link to="/" className="logo pd-0 mg-0">
                            <img src={logoIcon} alt="Dev Việt Nam" />
                        </Link>
                        <div className="df search">
                            <input
                                className="input nav-search"
                                type="text"
                                placeholder="Search..."
                            />
                            <SearchStatus className="hover-bg" size="25" color="currentColor" />

                            {/* <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6   icon-md hover-bg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg> */}
                        </div>
                    </div>
                    <div className="right">
                        {localStorage.getItem("tk") ? (
                            <>
                                <Link to={"/new"}>
                                    <div className="button-lg hover-button mgr-10">
                                        Đăng bài
                                    </div>
                                </Link>
                                <div className="nav-icon hover-bg">
                                    <Share size="30" color="currentColor" />
                                </div>
                                <div className="nav-icon hover-bg">
                                    <NotificationCircle
                                        size="30"
                                        color="currentColor"
                                    />
                                </div>
                                <div className="avatar-relative">
                                    <img
                                        className="avatar boder"
                                        src="https://picsum.photos/800/600"
                                        alt=""
                                    />
                                    <div className="user-popup cursor-pointer">
                                        <Link
                                            to={`/${userDataState?.username}`}
                                        >
                                            <div className="name bdb-2 hover-text">
                                                <div className="pd-10 bd-radius-5 hover-bg mg-5">
                                                    <h4 className="displayName pdl-10">
                                                        {userDataState?.name}
                                                    </h4>
                                                    <p className="userName pdl-10">
                                                        @
                                                        {
                                                            userDataState?.username
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="action bdb-2">
                                            <Link to="/">
                                                <p className="pdl-10 bd-radius-5 hover-bg mg-0 pd-10 mgl-5 mgr-5 mgt-5">
                                                    Dashboard
                                                </p>
                                            </Link>
                                            <Link to="/new">
                                                <p className="pdl-10 bd-radius-5 hover-bg mg-0 pd-10 mgl-5 mgr-5">
                                                    Create Post
                                                </p>
                                            </Link>
                                            <p className="pdl-10 bd-radius-5 hover-bg mg-0 pd-10 mgl-5 mgr-5">
                                                Reading List
                                            </p>
                                            <p className="pdl-10 bd-radius-5 hover-bg mg-0 pd-10 mgl-5 mgr-5 mgb-5">
                                                Settings
                                            </p>
                                        </div>
                                        <div
                                            className="signout"
                                            onClick={handleLogout}
                                        >
                                            <p className="pdl-10 bd-radius-5 hover-bg pd-10 mg-5">
                                                Sign Out
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div
                                className="button-lg hover-button mgr-10"
                                onClick={() => handleLoginForm("login")}
                            >
                                Đăng nhập
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

// Header.propTypes = {

// }
const mapStateToProps = (state) => {
    return {
        userData: state.auth,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        logoutRequest: () => {
            dispatch(logout());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
