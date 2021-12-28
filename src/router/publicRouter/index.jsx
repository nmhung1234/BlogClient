import React from "react";
import { Switch, Route } from "react-router-dom";
import Loading from "../../components/Loading";

const Home = React.lazy(() => import("../../pages/Home"));
const DetailPost = React.lazy(() => import("../../pages/DetailPost"));
const LoginRegister = React.lazy(() =>
    import("../../components/Login_Register")
);

function index(props) {
    return (
        <React.Suspense fallback={<Loading />}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route
                    exact
                    path="/:username/:slugString"
                    component={DetailPost}
                />
                <Route exact path="/login" component={LoginRegister} />
            </Switch>
        </React.Suspense>
    );
}

export default index;
