import React from "react";
import "./style.css";
import logoIcon from "./../../logo.svg";
import bellIcon from "./../../assets/icons/bell.svg";
import connectIconn from "./../../assets/icons/connect.svg";
import searchIcon from "./../../assets/icons/search.svg";
// import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import LoginRegister from "./../Login_Register";

function Header(props) {
    const [actionState, setActionState] = React.useState("cancel");
    const handleLoginForm = (action) => {
        setActionState(action);
    };
    return (
        <>
            <div className="nav pd-5">
                <LoginRegister actionProp={actionState} />
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
                        <img
                            className="nav-icon hover-secondary-bg"
                            src={searchIcon}
                            alt=""
                        />
                    </div>
                </div>
                <div className="right">
                    <Link to={"/new"}>
                        <div className="button-lg hover-button mgr-10">
                            Đăng bài
                        </div>
                    </Link>

                    <div
                        className="button-lg hover-button mgr-10"
                        onClick={() => handleLoginForm("login")}
                    >
                        login
                    </div>

                    <div className="nav-icon hover-secondary-bg">
                        <img src={connectIconn} alt="" />
                    </div>
                    <div className="nav-icon hover-secondary-bg">
                        <img src={bellIcon} alt="" />
                    </div>
                    <div className="avatar bd-primary">
                        <div className="user-popup cursor-pointer">
                            <Link to={"/nmhung"}>
                                <div className="name bdb-2 hover-primary">
                                    <div className="pd-10 bd-radius-5 hover-secondary-bg mg-5">
                                        <h4 className="displayName pdl-10">
                                            Nguyen Hung
                                        </h4>
                                        <p className="userName pdl-10">
                                            @hungnm
                                        </p>
                                    </div>
                                </div>
                            </Link>
                            <div className="action bdb-2">
                                <Link to="/">
                                    <p className="pdl-10 bd-radius-5 hover-secondary-bg mg-0 pd-10 mgl-5 mgr-5 mgt-5">
                                        Dashboard
                                    </p>
                                </Link>
                                <Link to="/new">
                                    <p className="pdl-10 bd-radius-5 hover-secondary-bg mg-0 pd-10 mgl-5 mgr-5">
                                        Create Post
                                    </p>
                                </Link>
                                <p className="pdl-10 bd-radius-5 hover-secondary-bg mg-0 pd-10 mgl-5 mgr-5">
                                    Reading List
                                </p>
                                <p className="pdl-10 bd-radius-5 hover-secondary-bg mg-0 pd-10 mgl-5 mgr-5 mgb-5">
                                    Settings
                                </p>
                            </div>
                            <div className="signout">
                                <p className="pdl-10 bd-radius-5 hover-secondary-bg pd-10 mg-5">
                                    Sign Out
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// Header.propTypes = {

// }

export default Header;
