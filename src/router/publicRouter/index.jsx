import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginRegister from "../../components/Login_Register";
import DetailPost from "../../pages/DetailPost";
import Home from "../../pages/Home";

function index(props) {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:username/:slugString" component={DetailPost} />
            <Route exact path="/login" component={LoginRegister} />
        </Switch>
    );
}

export default index;
