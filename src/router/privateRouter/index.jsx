import React from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { getUserDataRequest } from "../../action/user";
import { decodeJWT } from "../../utils";

const UpPostPage = React.lazy(() => import("../../pages/UpPost"));
const UserProfilePage = React.lazy(() => import("../../pages/UserProfile"));
const DetailPostPage = React.lazy(() => import("../../pages/DetailPost"));
const HomePage = React.lazy(() => import("../../pages/Home"));
const NotFound = React.lazy(() => import("../../components/NotFound"));

import Loading from "../../components/Loading";

const PrivateRouter = () => {
    const dispatch = useDispatch();

    //gọi để lấy data user về nếu có token ở local Storage
    React.useEffect(() => {
        const token = localStorage.getItem("tk");
        if (token) {
            const decoded = decodeJWT(token);
            dispatch(getUserDataRequest(decoded.username));
        }
    }, []);
    return (
        <React.Suspense fallback={<Loading />}>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/new" component={UpPostPage} />
                <Route
                    exact
                    path="/post/:username/:slug"
                    component={DetailPostPage}
                />
                <Route
                    exact
                    path="/user/:username"
                    component={UserProfilePage}
                />
                <Route component={NotFound} />
            </Switch>
        </React.Suspense>
    );
};

export default PrivateRouter;
