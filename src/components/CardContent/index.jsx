import React from "react";
import { Link } from "react-router-dom";
import { CardContentStyle } from "./styles.js";

const CardContent = (props) => {
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
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Excepturi, dolores?
                    </p>
                    <p className="button-tn">Mới</p>
                </div>
            </Link>
            <Link to={""}>
                <div className="listitem hover-bg">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Excepturi, dolores?
                    </p>
                    <p className="button-tn">Mới</p>
                </div>
            </Link>
            <Link to={""}>
                <div className="listitem hover-bg">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Excepturi, dolores?
                    </p>
                    <p className="button-tn">Mới</p>
                </div>
            </Link>
            <Link to={""}>
                <div className="listitem hover-bg">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Excepturi, dolores?
                    </p>
                    <p className="button-tn">Mới</p>
                </div>
            </Link>
            <Link to={""}>
                <div className="listitem hover-bg">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Excepturi, dolores?
                    </p>
                    <p className="button-tn">Mới</p>
                </div>
            </Link>
        </CardContentStyle>
    );
};
export default CardContent;
