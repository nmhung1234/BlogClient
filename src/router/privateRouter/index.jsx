import React from "react";
import { Switch, Route } from "react-router-dom";
import UpPost from "../../pages/UpPost";
import UserProfile from "../../pages/UserProfile";

// import PropTypes from 'prop-types'

function index(props) {
    return (
        <Switch>
            <Route exact path="/new" component={UpPost} />
            <Route exact path="/:username" component={UserProfile} />
        </Switch>
    );
}

// index.propTypes = {

// }

export default index;
