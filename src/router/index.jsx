import React from "react";

import PublicRouter from "./publicRouter";
import PrivateRouter from "./privateRouter";
import { connect } from "react-redux";
import Header from "../components/Header";
import "./style.scss";
function Router(props) {
    const { userData } = props;
    const [userDataState, setUserDataState] = React.useState();
    React.useEffect(() => {
        setUserDataState(userData);
    }, [userData]);
    return (
        <>
            <Header />
            <div className="Router-wrapper">
                {localStorage.getItem("tk") ? (
                    <PrivateRouter />
                ) : (
                    <PublicRouter />
                )}
            </div>
        </>
    );
}

// index.propTypes = {

// }
const mapStateToProps = (state) => {
    return {
        userData: state.auth,
    };
};

export default connect(mapStateToProps, null)(Router);
