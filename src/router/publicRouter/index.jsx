import React from "react";
import { Switch, Route } from "react-router-dom";
import DetailPost from "../../pages/DetailPost";
import Home from "../../pages/Home";

// import PropTypes from 'prop-types'

function index(props) {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:username/:postname" component={DetailPost} />
        </Switch>
    );
}

// index.propTypes = {

// }

export default index;
