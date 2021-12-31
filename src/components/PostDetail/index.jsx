import React from "react";
import PropTypes from "prop-types";
import MDEditor from "@uiw/react-md-editor";

import Tag from "../Tag";
import { showTime } from "./../../utils/index";

import { PostDetailStyles } from "./styles";

const PostDetail = (props) => {
    const { data } = props;
    const [dataState, setDataState] = React.useState();
    let dataPost = dataState?.owner_post;
    React.useEffect(() => {
        setDataState(data);
    }, [data]);

    return (
        <PostDetailStyles className="border">
            {dataPost?.coverImg ? (
                <img className="img-post" src={dataPost?.coverImg} alt="" />
            ) : (
                ""
            )}
            <div className="body">
                <div className="title pdb-20">{dataPost?.title}</div>
                {dataState?.tags.map((elem, index) =>
                    typeof elem != "object" ? (
                        <Tag key={index} tag={{ name: elem }} />
                    ) : (
                        <Tag key={index} tag={elem} />
                    )
                )}
                <div className="authorInfo mgt-20 pdb-20 df align-c">
                    <div className="df align-c">
                        <img
                            className="avatar mgl-0"
                            src="https://picsum.photos/800/600"
                            alt=""
                        />
                        <h4 className="name bd-radius-5 hover-bg pd-5 cursor-pointer">
                            {dataState?.username}
                        </h4>
                    </div>
                    <div className="time pdl-10 text-light">
                        {showTime(dataPost?.lastmodified)}
                    </div>
                </div>
                <div className="content">
                    <MDEditor.Markdown source={dataPost?.content} />
                </div>
                <div className="discussion"></div>
            </div>
        </PostDetailStyles>
    );
}

PostDetail.propTypes = {
    data: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        sex: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        favoriteTopic: PropTypes.any,
        avatar: PropTypes.string.isRequired,
        type: PropTypes.number.isRequired,
        createdAt: PropTypes.string.isRequired,
        owner_post: PropTypes.shape({
            _id: PropTypes.string.isRequired,
            owner_id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            coverImg: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            comments: {},
            like: 0,
            views: 0,
            tags: PropTypes.array,
            createdAt: PropTypes.string.isRequired,
            lastmodified: PropTypes.string.isRequired,
            slugString: PropTypes.string.isRequired,
        }),
        tags: PropTypes.array.isRequired,
    }),
};
PostDetail.defaultProps = {
    data: {
        _id: "610ab32f5e2bafb87ef87e6c",
        email: "nmhung@gmail.com",
        username: "nmhung",
        name: "nmhung",
        sex: 0,
        description: "",
        favoriteTopic: null,
        avatar: null,
        type: 1,
        createdAt: "2021-08-04T15:33:03.284Z",
        owner_post: {
            _id: "6123cf8542454d0e697012bc",
            owner_id: "610ab32f5e2bafb87ef87e6c",
            title: "lại tets tiếp ⚡",
            coverImg: "https://picsum.photos/800/600",
            content: "aaaaa mệt quá đấy",
            comments: {},
            like: 0,
            views: 0,
            tags: ["#react", "#nodejs", "#javascript"],
            createdAt: "2021-08-23T16:40:37.818Z",
            lastmodified: "2021-08-23T16:40:37.818Z",
            slugString: "lai-tets-tiep-xemt8",
        },
        tags: [
            {
                _id: "61149fa4f9e0d0e18a826ba1",
                name: "#javascript",
                colorBG: "#F7E018",
                colorText: "#000",
            },
        ],
    },
};

export default PostDetail;
