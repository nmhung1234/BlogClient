import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// import "./style.scss";

const TagStyle = styled.p`
    width: fit-content;
    display: inline-block;
    padding-bottom: 3px;
    background-color: ${(props => props.style.colorBG)};
    color: ${(props => props.style.colorText)};
`;
export const Tag = (props) => {
    const { tag } = props;
    return (
        <TagStyle className="bd-radius-5 pdl-5 pdr-5 mg-5" style={tag}>
            {`${tag.name}`}
        </TagStyle>
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
