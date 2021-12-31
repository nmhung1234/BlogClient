import React from "react";
import { Link } from "react-router-dom";

import { NavigationItemStyles } from "./styles";

const NavigationItem = (props) => {
    const { icon, content, link } = props;
    return (
        <Link to={link || '#'}>
            <NavigationItemStyles className="hover-bg pd-10 bd-radius-5 hover-text">
                {icon ? icon : ""}
                <p>{content}</p>
            </NavigationItemStyles>
        </Link>
    );
};
export default NavigationItem;