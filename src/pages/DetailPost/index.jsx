import React, { Fragment } from "react";
// import { connect } from "react-redux";
import CardContent from "../../components/CardContent";
import Comment from "../../components/Comment";
// import PropTypes from 'prop-types'
import PostDetail from "../../components/PostDetail";
import axios from "./../../utils/customAxios";
// import "./style.scss";
import { DetailPostPageStyles } from "./styles";

const DetailPostPage = (props) => {
    const slug = props.match.params.slugString;
    const username = props.match.params.username;

    const [postContent, setPostContent] = React.useState();

    React.useEffect(() => {
        axios
            .get(`post/detail?username=${username}&slugString=${slug}`)
            .then((response) => {
                setPostContent((pre) => response.data.data[0]);
            });
    }, []);
    return (
        <>
            <DetailPostPageStyles>
                <div className="detail-post df">
                    {postContent ? (
                        <Fragment>
                            <PostDetail data={postContent} />
                            <Comment />{" "}
                        </Fragment>
                    ) : (
                        ""
                    )}
                </div>
                <div className="author-info">
                    <div className="short-profile bd-radius-5 border pdb-20 mgb-15">
                        <div className="bubble"></div>
                        <div className="info">
                            <img src="https://picsum.photos/200" />
                            <h2>nmhungxxx</h2>
                        </div>
                        <div className="follow-btn button-lg hover-button mgl-20 mgr-20 text-center">
                            Theo dõi
                        </div>
                        <div className="description mg-20">
                            <p>
                                JavaScript developer & bloger Lorem ipsum, dolor
                                sit amet consectetur adipisicing elit.
                                Cupiditate neque modi illum minima at aliquam
                                animi sunt et voluptatum nam?
                            </p>
                        </div>
                        <div className="join-time pdl-20">
                            <h4>Đã tham gia</h4>
                            <p>15 tháng 10, 2020</p>
                        </div>
                    </div>
                    <CardContent title="More from nmhungxxx" />
                </div>
            </DetailPostPageStyles>
        </>
    );
};

// DetailPost.propTypes = {

// }
// const mapStateToProps = (state) => {};

// const mapDispatchToProps = (dispatch) => {};
export default DetailPostPage;
