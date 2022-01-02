import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TagStyle = styled.p`
    width: fit-content;
    display: inline-block;
    padding-bottom: 3px;
    background-color: ${(props) => props.style.colorBG};
    color: ${(props) => props.style.colorText};
    border: 2px solid rgba(0, 0, 0, 0);
    transition: all 0.5s;
    &:hover {
        background-color: ${(props) => props.style.colorText};
        color: ${(props) => props.style.colorBG};
        border: 2px solid rgba(0, 0, 0, 0.3);
    }
`;
const Tag = (props) => {
    const { tag } = props;
    return (
        <TagStyle className="tag bd-radius-5 pdl-5 pdr-5 mg-5" style={tag}>
            {`${tag.name}`}
        </TagStyle>
    );
};

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
