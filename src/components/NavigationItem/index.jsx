import React, { Fragment } from 'react'
import './style.scss';

export const NavigationItem = (props) => {
    const {icon, content} = props;
    return (
        <div className="navigation-item hover-secondary-bg pd-10 bd-radius-5 hover-primary">
            {icon ? <img className="mgr-10" src={icon} alt="" /> : ""}
            <p>{content}</p>
        </div>
    )
}
