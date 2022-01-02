import React from "react";
import { Switch, Route } from "react-router-dom";
import Loading from "../../components/Loading";

const HomePage = React.lazy(() => import("../../pages/Home"));
const DetailPostPage = React.lazy(() => import("../../pages/DetailPost"));
const LoginRegister = React.lazy(() =>
    import("../../components/Login_Register")
);
const NotFound = React.lazy(() => import("../../components/NotFound"));

function PublicRouter() {
    return (
        <React.Suspense fallback={<Loading />}>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route
                    exact
                    path="/post/:username/:slugString"
                    component={DetailPostPage}
                />
                <Route exact path="/login" component={LoginRegister} />
                <Route component={NotFound} />
            </Switch>
        </React.Suspense>
    );
}

export default PublicRouter;
