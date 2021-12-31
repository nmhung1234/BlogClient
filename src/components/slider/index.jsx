import React from "react";
import PropTypes from "prop-types";

// import "./style.scss";

import { SliderStyles } from "./styles";

const Slider = (props) => {
    const { data, getAction } = props;

    const [offsetLeft, setOffsetLeft] = React.useState();
    const [clientWidth, setClientWidth] = React.useState();

    const handleClick = (e) => {
        setOffsetLeft(e.target.offsetLeft);
        setClientWidth(e.target.clientWidth);
        const nameAction = e.target.innerText;
        getAction ? getAction(nameAction) : "";
    };
    return (
        <SliderStyles className="mgb-10">
            <div className="right df">
                <div className="select df">
                    {data?.map((ele, index) => (
                        <p
                            key={index}
                            className="bd-radius-5 hover-bg hover-text mgt-10 active"
                            onClick={handleClick}
                        >
                            {ele}
                        </p>
                    ))}
                </div>
                <div
                    className="slider bd-radius-5"
                    style={{
                        left: `${offsetLeft + (clientWidth - 40) / 2}px`,
                    }}
                ></div>
            </div>
        </SliderStyles>
    );
};

Slider.propTypes = {
    data: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    getAction: PropTypes.func,
};

export default Slider;