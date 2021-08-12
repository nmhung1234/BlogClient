import React from "react";
// import PropTypes from "prop-types";

function Slider() {
    const [offsetLeft, setOffsetLeft] = React.useState();
    const [clientWidth, setClientWidth] = React.useState();
    const handleClick = (e) => {
        setOffsetLeft(e.target.offsetLeft);
        setClientWidth(e.target.clientWidth);
    };
    return (
        <div className="category df">
            <div className="left mgt-10">Bài viết</div>
            <div className="right df">
                <div className="select df">
                    <p
                        className="bd-radius-5 hover-secondary-bg mgt-10 active"
                        onClick={handleClick}
                    >
                        Bảng tin
                    </p>
                    <p
                        className="bd-radius-5 hover-secondary-bg mgt-10"
                        onClick={handleClick}
                    >
                        Tuần
                    </p>
                    <p
                        className="bd-radius-5 hover-secondary-bg mgt-10"
                        onClick={handleClick}
                    >
                        Tháng
                    </p>
                    <p
                        className="bd-radius-5 hover-secondary-bg mgt-10"
                        onClick={handleClick}
                    >
                        Năm
                    </p>
                    <p
                        className="bd-radius-5 hover-secondary-bg mgt-10"
                        onClick={handleClick}
                    >
                        Mới nhất
                    </p>
                    <p
                        className="bd-radius-5 hover-secondary-bg mgt-10"
                        onClick={handleClick}
                    >
                        Khám phá
                    </p>
                </div>
                <div
                    className="slider bd-radius-5"
                    style={{
                        left: `${offsetLeft + (clientWidth - 40) / 2}px`,
                    }}
                ></div>
            </div>
        </div>
    );
}

// Slider.propTypes = {


// }

export default Slider;
