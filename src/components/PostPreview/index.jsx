import React from "react";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { Heart, Message } from "iconsax-react";
import { showTime } from "../../utils";
import Tag from "../Tag";
import "./style.scss";
function PostPreview(props) {
    const { data } = props;
    return (
        <Link
            to={
                data
                    ? `${data?.ownerData?.name}/${data?.postData?.slugString}`
                    : ""
            }
            className="previrewPost fd-c boder bd-radius-5 mgb-15"
        >
            {data?.postData?.coverImg ? (
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
                <div className="right">
                    <p
                        className="bd-radius-5 hover-bg pd-5"
                        style={{ width: "min-content", fontWeight: "500" }}
                    >
                        {data?.ownerData?.name ? (
                            data.ownerData.name
                        ) : (
                            <Skeleton width={100} />
                        )}
                    </p>
                    <p className="date text-light pdl-5">
                        {data?.postData?.createdAt ? (
                            showTime(data.postData.createdAt)
                        ) : (
                            <Skeleton width={100} />
                        )}
                    </p>
                </div>
            </div>
            <div className="body fd-r mgt-10 mgr-20 mgb-20">
                <h1 className=" mgb-20 cursor-pointer hover-text">
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
                        <div className="df hover-bg pd-10 bd-radius-5 cursor-pointer reaction ">
                            <Heart size="20" color="currentColor" />
                            {data ? (
                                <p className="text-light hover-text pdl-10">
                                    {data?.postData?.like
                                        ? data.postData.like
                                        : 0}{" "}
                                    reaction
                                </p>
                            ) : (
                                <Skeleton width={100} height={25} />
                            )}
                        </div>
                        <div className="df hover-bg pd-10 bd-radius-5 cursor-pointer comment ">
                            <Message size="20" color="currentColor" />
                            {data ? (
                                <Link
                                    to={`${data?.ownerData?.name}/${data?.postData?.slugString}/#comment`}
                                    className="text-light hover-text pdl-10"
                                >
                                    Add comment
                                </Link>
                            ) : (
                                <Skeleton width={100} height={25} />
                            )}
                        </div>
                    </div>
                    <div className="right">
                        {data?.postData ? (
                            <div className="button-sm hover-button">Save</div>
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
    // key2: PropTypes.number.isRequired,
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
