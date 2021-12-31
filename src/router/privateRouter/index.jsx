import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { getUserDataRequest } from "../../action/user";
import Loading from "../../components/Loading";
import { decodeJWT } from "../../utils";
const UpPost = React.lazy(() => import("../../pages/UpPost"));
const UserProfile = React.lazy(() => import("../../pages/UserProfile"));
const DetailPost = React.lazy(() => import("../../pages/DetailPost"));
const Home = React.lazy(() => import("../../pages/Home"));
const NotFound = React.lazy(() => import("../../components/NotFound"));

function PrivateRouter(props) {
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
        <React.Suspense fallback={<Loading />}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/new" component={UpPost} />
                <Route
                    exact
                    path="/post/:username/:slugString"
                    component={DetailPost}
                />
                <Route exact path="/user/:username" component={UserProfile} />
                <Route component={NotFound} />
            </Switch>
        </React.Suspense>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserData: (username) => {
            dispatch(getUserDataRequest(username));
        },
    };
};

export default connect(null, mapDispatchToProps)(PrivateRouter);
