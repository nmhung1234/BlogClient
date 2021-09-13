import React from "react";
import { connect } from "react-redux";
import { getUserDataRequest } from "../../action/user";
import { Switch, Route } from "react-router-dom";
import UpPost from "../../pages/UpPost";
import UserProfile from "../../pages/UserProfile";
import Home from "./../../pages/Home/index";
import DetailPost from "./../../pages/DetailPost/index";
import { decodeJWT } from "../../utils";

// import PropTypes from 'prop-types'

function index(props) {
    const { getUserData } = props;
    //gọi để lấy data user về nếu có token ở local Storage
    React.useEffect(() => {
        const token = localStorage.getItem("tk");
        if (token) {
            const decoded = decodeJWT(token);
            getUserData(decoded.username);
        }
    }, []);
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/new" component={UpPost} />
            <Route exact path="/:username/:slugString" component={DetailPost} />
            <Route exact path="/:username" component={UserProfile} />
        </Switch>
    );
}

// index.propTypes = {

// }
const mapDispatchToProps = (dispatch) => {
    return {
        getUserData: (username) => {
            dispatch(getUserDataRequest(username));
        },
    };
};

export default connect(null, mapDispatchToProps)(index);
