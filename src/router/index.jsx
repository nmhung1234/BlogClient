import React from "react";

import PublicRouter from "./publicRouter";
import PrivateRouter from "./privateRouter";

function index(props) {
    return (
        <>
            {localStorage.getItem("token") ? (
                <PrivateRouter />
            ) : (
                <PublicRouter />
            )}
        </>
    );
}

// index.propTypes = {

// }

export default index;
