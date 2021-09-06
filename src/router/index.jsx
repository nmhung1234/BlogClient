import React from "react";

import PublicRouter from "./publicRouter";
import PrivateRouter from "./privateRouter";
import { connect } from "react-redux";
import Header from "../components/Header";

function index(props) {
    const { userData } = props;
    const [userDataState, setUserDataState] = React.useState();
    React.useEffect(() => {
        setUserDataState(userData);
    }, [userData]);
    return (
        <>
            <Header />
            {userDataState?._id ? <PrivateRouter /> : <PublicRouter />}
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

export default connect(mapStateToProps, null)(index);
