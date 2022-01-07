import React from "react";
import PropTypes from "prop-types";
import { Skeleton } from "@mantine/core";

import { Link, useHistory } from "react-router-dom";
import { Heart, Message } from "iconsax-react";

import { showTime } from "../../utils";
import Tag from "../Tag";

import { PostDetailStyles } from "./styles";

const PostPreview = ({ data }) => {
    const history = useHistory();

    const handleCommentRedirect = () => {
        history.push(`/post/${data?.ownerData?.name}/${data?.slug}#comment`);
    };

    return (
        <PostDetailStyles className="border bd-radius-5 mgb-15">
            <Link
                to={data ? `/post/${data?.ownerData?.name}/${data?.slug}` : "#"}
            >
                {data?.coverImg ? (
                    <div
                        style={{
                            width: "100%",
                            height: "200px",
                            borderRadius: "5px 5px 0 0",
                            backgroundImage: `url("${data?.coverImg}")`,
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
                        <Skeleton mr={10} height={40} radius="xl" circle />
                    )}
                    <div className="right">
                        <p
                            className="bd-radius-5 hover-bg pd-5"
                            style={{ width: "min-content", fontWeight: "500" }}
                        >
                            {data?.ownerData?.name ? (
                                data.ownerData.name
                            ) : (
                                <Skeleton
                                    height={20}
                                    width="100px"
                                    radius="xl"
                                />
                            )}
                        </p>
                        <p className="date text-light pdl-5">
                            {data?.createdAt ? (
                                showTime(data?.createdAt)
                            ) : (
                                <Skeleton
                                    height={10}
                                    width="100px"
                                    radius="xl"
                                />
                            )}
                        </p>
                    </div>
                </div>
                <div className="body fd-r mgt-10 mgr-20 mgb-20">
                    <h1 className=" mgb-20 cursor-pointer">
                        {data?.title ? (
                            data?.title
                        ) : (
                            <Skeleton
                                height={30}
                                mt={4}
                                radius="xl"
                                width="400px"
                            />
                        )}
                    </h1>
                    <div>
                        {data?.tags ? (
                            data?.tags.map((tag, index) => {
                                return <Tag key={index} tag={tag} />;
                            })
                        ) : (
                            <>
                                <Skeleton
                                    height={15}
                                    mb={3}
                                    radius="xl"
                                    width="300px"
                                />{" "}
                                <Skeleton
                                    height={15}
                                    mb={3}
                                    radius="xl"
                                    width="400px"
                                />{" "}
                                <Skeleton
                                    height={15}
                                    mb={3}
                                    radius="xl"
                                    width="200px"
                                />
                            </>
                        )}
                    </div>
                    <div className="bottom df mgt-10">
                        <div className="left df">
                            <div className="df hover-bg pd-10 bd-radius-5 cursor-pointer reaction ">
                                <Heart size="20" color="currentColor" />
                                {data ? (
                                    <p className="text-light hover-text pdl-10">
                                        {data?.like ? data?.like : 0} reaction
                                    </p>
                                ) : (
                                    <Skeleton
                                        width={100}
                                        radius="xl"
                                        height={25}
                                    />
                                )}
                            </div>
                            <div className="df hover-bg pd-10 bd-radius-5 cursor-pointer comment ">
                                <Message size="20" color="currentColor" />
                                {data ? (
                                    <div
                                        className="text-light hover-text pdl-10"
                                        onClick={handleCommentRedirect}
                                    >
                                        Add comment
                                    </div>
                                ) : (
                                    <Skeleton
                                        width={100}
                                        radius="xl"
                                        height={25}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="right">
                            {data ? (
                                <div className="button-sm hover-button">
                                    Save
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                </div>
            </Link>
        </PostDetailStyles>
    );
};

PostPreview.propTypes = {
    data: PropTypes.shape({
        ownerData: PropTypes.object.isRequired,
        owner_id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        coverImg: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        comments: PropTypes.array.isRequired,
        like: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        tags: PropTypes.array.isRequired,
        createdAt: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        lastModified: PropTypes.string.isRequired,
    }),
};

export default PostPreview;
