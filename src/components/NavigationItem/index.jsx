import React, { Fragment } from "react";
import "./style.scss";

export const NavigationItem = (props) => {
    const { icon, content } = props;
    return (
        <div className="navigation-item hover-bg pd-10 bd-radius-5 hover-text">
            {icon ? icon : ""}
            <p>{content}</p>
        </div>
    );
};
