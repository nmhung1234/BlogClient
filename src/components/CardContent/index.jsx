import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
export const CardContent = (props) => {
    return (
        <div className="card-content">
            <div className="header">
                <h3 className="title">#news</h3>
                <a href="" className="seeall">
                    Xem thêm
                </a>
            </div>
            <Link to={""}>
                <div className="listitem hover-bg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi, dolores?
                    <p className="new">Mới</p>
                </div>
            </Link>
            <Link to={""}>
                <div className="listitem hover-bg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi, dolores?
                    <p className="new">Mới</p>
                </div>
            </Link>
            <Link to={""}>
                <div className="listitem hover-bg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi, dolores?
                    <p className="new">Mới</p>
                </div>
            </Link>
            <Link to={""}>
                <div className="listitem hover-bg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi, dolores?
                    <p className="new">Mới</p>
                </div>
            </Link>
            <Link to={""}>
                <div className="listitem hover-bg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi, dolores?
                    <p className="new">Mới</p>
                </div>
            </Link>
        </div>
    );
};
