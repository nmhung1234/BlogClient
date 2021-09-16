import React from "react";
import { connect } from "react-redux";
import Comment from "../../components/Comment";
// import PropTypes from 'prop-types'
import PostDetail from "../../components/PostDetail";
import Header from "./../../components/Header";
import axios from "./../../utils/customAxios";
import "./style.scss";

function DetailPost(props) {
    console.log(props);

    const slug = props.match.params.slugString;
    const username = props.match.params.username;

    const [postContent, setPostContent] = React.useState();

    React.useEffect(() => {
        axios
            .get(`api/user/post/detail?username=${username}&slugString=${slug}`)
            .then((response) => {
                console.log(response);

                setPostContent((pre) => response.data.data[0]);
            });
    }, []);
    return (
        <>
            {/* <Header /> */}
            <div className="df justify-c mgt-20">
                <div className="Detail-post df">
                    {postContent ? (
                        <>
                            <PostDetail data={postContent} />
                            <Comment />{" "}
                        </>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </>
    );
}

// DetailPost.propTypes = {

// }
// const mapStateToProps = (state) => {};

// const mapDispatchToProps = (dispatch) => {};
export default DetailPost;
