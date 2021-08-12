import React from "react";
// import PropTypes from 'prop-types'

function Tag(props) {
    const {tag} = props
    return (
        <p
            className="tag bd-radius-5 pdl-5 pdr-5 mg-5"
            style={{
                backgroundColor: `${tag.colorBG}`,
                color: `${tag.colorText}`,
                paddingBottom: "3px"
            }}
        >
            {`${tag.name}`}
        </p>
    );
}

// Tag.propTypes = {

// }

export default Tag;
