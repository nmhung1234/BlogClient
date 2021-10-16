import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./style.scss";
import logoIcon from "./../../logo.svg";
// import PropTypes from 'prop-types'
import LoginRegister from "./../Login_Register";
import { logout } from "../../action/auth";

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
            <div className="nav pd-5">
                <div className="wrapper">
                    {userData?._id ? (
                        ""
                    ) : (
                        <LoginRegister actionProp={actionState} />
                    )}
                    <div className="left">
                        <Link to="/" className="pd-0 mg-0">
                            <img src={logoIcon} alt="Dev Việt Nam" />
                        </Link>
                        <div className="df search">
                            <input
                                className="input nav-search"
                                type="text"
                                placeholder="Search..."
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 icon-color icon-md hover-bg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
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
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 icon-color icon-sm"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                                        />
                                    </svg>
                                </div>
                                <div className="nav-icon hover-bg">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 icon-color icon-sm"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                        />
                                    </svg>
                                </div>
                                <div className="avatar-relative">
                                    <img
                                        className="avatar bd-primary"
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
