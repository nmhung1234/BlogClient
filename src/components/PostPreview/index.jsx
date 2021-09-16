import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./style.scss";
import commentIcon from "./../../assets/icons/message-circle.svg";
import likeIcon from "./../../assets/icons/heart.svg";
import { showTime } from "../../utils";
import Tag from "../Tag";
import Skeleton from "react-loading-skeleton";
function PostPreview(props) {
    const { data, key2 } = props;
    // console.log(data);

    return (
        <Link
            to={`${data?.ownerData?.name}/${data?.postData?.slugString}`}
            className="previrewPost df fd-c bd-primary bd-radius-5 mgb-10"
        >
            {key2 == 0 ? (
                <div
                    style={{
                        width: "100%",
                        height: "200px",
                        borderRadius: "5px 5px 0 0",
                        backgroundImage: `url("${data?.postData?.coverImg}")`,
                        backgroundSize: "cover",
                        opacity: "98%",
                    }}
                ></div>
            ) : (
                <Skeleton height={200} />
            )}
            <div className="infoAuthor mg-10 df">
                {/* <div className="avatar"> */}
                {data?.ownerData?.avatar ? (
                    <img
                        className="avatar mgr-10"
                        src={data.ownerData.avatar}
                        alt=""
                    />
                ) : (
                    <Skeleton
                        className="mgr-10"
                        width={40}
                        height={40}
                        circle={true}
                    />
                )}
                {/* </div> */}
                <div className="right df">
                    <p
                        className="bd-radius-5 hover-secondary-bg pd-5"
                        style={{ width: "fit-content", fontWeight: "500" }}
                    >
                        {data?.ownerData?.name ? (
                            data.ownerData.name
                        ) : (
                            <Skeleton width={100} />
                        )}
                    </p>
                    <p className="date color-gray-text pdl-5">
                        {data?.postData?.createdAt ? (
                            showTime(data.postData.createdAt)
                        ) : (
                            <Skeleton width={100} />
                        )}
                    </p>
                </div>
            </div>
            <div className="body df fd-r mgt-10 mgr-20 mgb-20">
                <h1 className=" mgb-20 cursor-pointer hover-primary">
                    {data?.postData?.title ? (
                        data.postData.title
                    ) : (
                        <Skeleton width={300} />
                    )}
                </h1>
                <div>
                    {data?.tags ? (
                        data.tags?.map((tag, index) => {
                            return <Tag key={index} tag={tag} />;
                        })
                    ) : (
                        <>
                            <Skeleton width={100} height={25} />{" "}
                            <Skeleton width={100} height={25} />{" "}
                            <Skeleton width={100} height={25} />
                        </>
                    )}
                </div>
                <div className="bottom df mgt-10">
                    <div className="left df">
                        <div className="df hover-secondary-bg pd-10 bd-radius-5 cursor-pointer reaction ">
                            <img className="icon mgr-5" src={likeIcon} alt="" />
                            <p className="color-gray-text hover-primary">
                                {data?.postData?.like ? data.postData.like : 0}{" "}
                                reaction
                            </p>
                        </div>
                        <div className="df hover-secondary-bg pd-10 bd-radius-5 cursor-pointer comment ">
                            <img
                                className="icon mgr-5"
                                src={commentIcon}
                                alt=""
                            />
                            <p className="color-gray-text hover-primary">
                                Add comment
                            </p>
                        </div>
                    </div>
                    <div className="right">
                        {data?.postData ? (
                            <div className="button-sm">Save</div>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
}

PostPreview.propTypes = {
    data: PropTypes.shape({
        ownerData: PropTypes.object.isRequired,
        postData: PropTypes.object.isRequired,
    }),
    key2: PropTypes.number.isRequired,
};

// PostPreview.defaultProps = {
//     data: {
//         "tags": [
//             {
//                 "_id": "61149fa4f9e0d0e18a826ba1",
//                 "name": "#javascript",
//                 "colorBG": "#F7E018",
//                 "colorText": "#000"
//             },
//             {
//                 "_id": "6114a049f9e0d0e18a826ba3",
//                 "name": "#nodejs",
//                 "colorBG": "#8BBF3D",
//                 "colorText": "#fff"
//             },
//             {
//                 "_id": "6114bdf4f9e0d0e18a826baa",
//                 "name": "#reactjs",
//                 "colorBG": "#2A2C2E",
//                 "colorText": "#61DAFB"
//             }
//         ],
//         "postData": {
//             "_id": "611e681b468749bda6521fa1",
//             "owner_id": "610ab32f5e2bafb87ef87e6c",
//             "title": "🚌🛺 Du lịch khám phá",
//             "coverImg": "http://res.cloudinary.com/nmhung/image/upload/e_blur:50,q_80/v1629382557/puuxs6fefqzaj6vcasuk.png",
//             "content": "Đây là nội dùng demo vì thế nên không có gì nhé! hihiihihi\n![alt](http://res.cloudinary.com/nmhung/image/upload/e_blur:50,q_80/v1629382598/ppm81cwmafctipet8f1e.jpg)\nmjsbjbjsbfksbfksks",
//             "comments": {},
//             "like": 0,
//             "views": 0,
//             "tags": [
//                 "#javascript",
//                 "#nodejs",
//                 "#reactjs",
//                 "#react"
//             ],
//             "createdAt": "2021-08-19T14:18:03.134Z",
//             "lastmodified": "2021-08-19T14:18:03.134Z",
//             "slugString": "du-lich-kham-pha-q2szl"
//         },
//         "ownerData": {
//             "_id": "610ab32f5e2bafb87ef87e6c",
//             "email": "nmhung@gmail.com",
//             "username": "nmhung",
//             "name": "nmhung",
//             "sex": 0,
//             "description": "",
//             "favoriteTopic": null,
//             "avatar": null,
//             "type": 1,
//             "createdAt": "2021-08-04T15:33:03.284Z"
//         }
//     }
// }

export default PostPreview;
