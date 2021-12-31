import React from "react";
import { useSelector } from "react-redux";

import PublicRouter from "./publicRouter";
import PrivateRouter from "./privateRouter";
import Header from "../components/Header";
import Toast from "../components/Toast";

import "./style.scss";

const Router = () => {
    const userDataStore = useSelector((store) => store.auth);
    const [userDataState, setUserDataState] = React.useState();
    React.useEffect(() => {
        setUserDataState(userDataStore);
    }, [userDataStore]);
    return (
        <>
            <Header />
            <Toast />
            <div className="Router-wrapper">
                {localStorage.getItem("tk") ? (
                    <PrivateRouter />
                ) : (
                    <PublicRouter />
                )}
            </div>
        </>
    );
};

// index.propTypes = {

// }

export default Router;
