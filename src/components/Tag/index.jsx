import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
function Tag(props) {
    const { tag } = props;
    return (
        <p
            className="tag bd-radius-5 pdl-5 pdr-5 mg-5"
            style={{
                backgroundColor: `${tag.colorBG}`,
                color: `${tag.colorText}`,
                paddingBottom: "3px",
            }}
        >
            {`${tag.name}`}
        </p>
    );
}

Tag.propTypes = {
    tag: PropTypes.shape({
        colorBG: PropTypes.string,
        colorText: PropTypes.string,
        name: PropTypes.string.isRequired,
    }),
};

Tag.defaultProps = {
    tag: {
        colorBG: "#37c2ec",
        colorText: "#4e4e4ee",
        name: "#demotag",
    },
};

export default Tag;
