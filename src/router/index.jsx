import React from "react";

import PublicRouter from "./publicRouter";
import PrivateRouter from "./privateRouter";

function index(props) {
    return (
        <>
            <PublicRouter />
            <PrivateRouter />
        </>
    );
}

// index.propTypes = {

// }

export default index;
