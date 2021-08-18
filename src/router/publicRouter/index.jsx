import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginRegister from "../../components/Login-Register";
import DetailPost from "../../pages/DetailPost";
import Home from "../../pages/Home";

// import PropTypes from 'prop-types'

function index(props) {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:username/:postname" component={DetailPost} />
            <Route exact path="/login" component={LoginRegister} />
        </Switch>
    );
}

// index.propTypes = {

// }

export default index;
