import React from "react";
// import PropTypes from 'prop-types'
import axios from "./../../utils/customAxios";
import { useParams } from "react-router";

import CardContent from "../../components/CardContent";
import Comment from "../../components/Comment";
import PostDetail from "../../components/PostDetail";

import { DetailPostPageStyles } from "./styles";

const DetailPostPage = () => {
    const params = useParams();
    const { username, slug } = params;
    const [postContent, setPostContent] = React.useState();

    React.useEffect(() => {
        axios
            .get(`/post/detail?username=${username}&slug=${slug}`)
            .then((response) => {
                setPostContent((pre) => response.data.data[0]);
            });
    }, []);
    return (
        <DetailPostPageStyles>
            <div className="detail-post df">
                {postContent ? (
                    <>
                        <PostDetail data={postContent} />
                        <Comment />{" "}
                    </>
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
                            JavaScript developer & bloger Lorem ipsum, dolor sit
                            amet consectetur adipisicing elit. Cupiditate neque
                            modi illum minima at aliquam animi sunt et
                            voluptatum nam?
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
    );
};

// DetailPost.propTypes = {

// }

export default DetailPostPage;
