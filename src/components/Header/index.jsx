import React from "react";
import "./style.scss";
import logoIcon from "./../../logo.svg";
import bellIcon from "./../../assets/icons/bell.svg";
import connectIconn from "./../../assets/icons/connect.svg";
import searchIcon from "./../../assets/icons/search.svg";
// import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import LoginRegister from "./../Login_Register";
import { connect } from "react-redux";

function Header(props) {
    const { userData } = props;
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

    return (
        <>
            <div className="nav pd-5">
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
                        <img
                            className="nav-icon hover-secondary-bg"
                            src={searchIcon}
                            alt=""
                        />
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

                            <div className="nav-icon hover-secondary-bg">
                                <img src={connectIconn} alt="" />
                            </div>
                            <div className="nav-icon hover-secondary-bg">
                                <img src={bellIcon} alt="" />
                            </div>
                            <div className="avatar-relative">
                                <img
                                    className="avatar bd-primary"
                                    src="https://picsum.photos/800/600"
                                    alt=""
                                />
                                <div className="user-popup cursor-pointer">
                                    <Link to={`/${userDataState?.username}`}>
                                        <div className="name bdb-2 hover-primary">
                                            <div className="pd-10 bd-radius-5 hover-secondary-bg mg-5">
                                                <h4 className="displayName pdl-10">
                                                    {userDataState?.name}
                                                </h4>
                                                <p className="userName pdl-10">
                                                    @{userDataState?.username}
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

export default connect(mapStateToProps, null)(Header);
