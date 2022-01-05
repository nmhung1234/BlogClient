import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Share, NotificationCircle, SearchStatus } from "iconsax-react";
import LoginRegister from "./../Login_Register";

import { logout } from "../../action/auth";
import logoIcon from "./../../logo.svg";

import { HeaderStyle } from "./styles.js";

const Header = () => {
    const userDataStore = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const [actionState, setActionState] = React.useState(0);
    const [userDataState, setUserDataState] = React.useState();
    const num = React.useRef(1);
    const darkmodeRef = React.useRef();

    const handleLoginForm = (action) => {
        setActionState(num.current);
        num.current++;
    };

    const onHandleDarkmode = () => {
        console.log(darkmodeRef.current.checked);
        const root = document.querySelector(":root");

        const isLightMode =
            root.getAttribute("data-theme") === "dark" ? false : true;
        // toggle theme mode
        if (isLightMode) {
            root.setAttribute("data-theme", "dark");
        } else {
            root.setAttribute("data-theme", "light");
        }
    };

    // nếu có data thì set tên vào popup user
    React.useEffect(() => {
        setUserDataState(userDataStore);
    }, [userDataStore]);

    const handleLogout = () => {
        dispatch(logout());
    };
    return (
        <>
            <HeaderStyle>
                <div className="wrapper">
                    {userDataStore?._id ? (
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
                            <SearchStatus
                                className="hover-bg"
                                size="25"
                                color="currentColor"
                            />
                        </div>
                    </div>
                    <div className="right">
                        {localStorage.getItem("tk") ? (
                            <>
                                <Link to={"/new"}>
                                    <div className="button-lg button-outline mgr-10">
                                        Đăng bài
                                    </div>
                                </Link>
                                <div className="nav-icon hover-bg bd-cycle">
                                    <Share size="30" color="currentColor" />
                                </div>
                                <div className="nav-icon hover-bg bd-cycle">
                                    <NotificationCircle
                                        size="30"
                                        color="currentColor"
                                    />
                                </div>
                                <div className="avatar-relative">
                                    <img
                                        className="avatar border"
                                        src="https://picsum.photos/800/600"
                                        alt=""
                                    />
                                    <div className="user-popup cursor-pointer">
                                        <Link
                                            to={`/user/${userDataState?.username}`}
                                        >
                                            <div className="name bdb-2">
                                                <div className="pd-10 bd-radius-5 hover-bg hover-text mg-5">
                                                    <h4 className="displayName pdl-10 ">
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
                                            <div className="darkmode pdl-10 bd-radius-5 hover-bg mg-0 pd-10 mgl-5 mgr-5 mgb-5">
                                                <span>Dark Mode</span>
                                                <input
                                                    ref={darkmodeRef}
                                                    type="checkbox"
                                                    id="switch"
                                                    className="switch-input"
                                                    onChange={onHandleDarkmode}
                                                />
                                                <label
                                                    htmlFor="switch"
                                                    className="switch"
                                                ></label>
                                            </div>
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
            </HeaderStyle>
        </>
    );
};

// Header.propTypes = {

// }
export default Header;
