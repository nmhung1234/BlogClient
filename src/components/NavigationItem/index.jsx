import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export const NavigationItem = (props) => {
    const { icon, content, link } = props;
    return (
        <Link to={link}>
            <div className="navigation-item hover-bg pd-10 bd-radius-5 hover-text">
                {icon ? icon : ""}
                <p>{content}</p>
            </div>
        </Link>
    );
};
