import React from "react";
import { Link } from "react-router-dom";
// import "./style.scss";
import {CardContentStyle} from "./styles.js";

export const CardContent = (props) => {
    const { title } = props;
    return (
        <CardContentStyle>
            <div className="header">
                <h3 className="title">{title ? title : "#news"}</h3>
                <a href="" className="seeall">
                    Xem thêm
                </a>
            </div>
            <Link to={""}>
                <div className="listitem hover-bg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi, dolores?
                    <p className="button-tn">Mới</p>
                </div>
            </Link>
            <Link to={""}>
                <div className="listitem hover-bg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi, dolores?
                    <p className="button-tn">Mới</p>
                </div>
            </Link>
            <Link to={""}>
                <div className="listitem hover-bg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi, dolores?
                    <p className="button-tn">Mới</p>
                </div>
            </Link>
            <Link to={""}>
                <div className="listitem hover-bg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi, dolores?
                    <p className="button-tn">Mới</p>
                </div>
            </Link>
            <Link to={""}>
                <div className="listitem hover-bg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi, dolores?
                    <p className="button-tn">Mới</p>
                </div>
            </Link>
        </CardContentStyle>
    );
};
