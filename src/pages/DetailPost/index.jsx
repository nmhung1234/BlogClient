import React from "react";
import Comment from "../../components/Comment";
// import PropTypes from 'prop-types'
import PostDetail from "../../components/PostDetail";
import Header from "./../../components/Header";
import "./style.css";
function DetailPost(props) {
    console.log(props);

    return (
        <>
            <Header />
            <div className="df justify-c mgt-20">
                <div className="Detail-post df">
                    <PostDetail />
                    <Comment />
                </div>
            </div>
        </>
    );
}

// DetailPost.propTypes = {

// }

export default DetailPost;
