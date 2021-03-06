import React from "react";
import PropTypes from "prop-types";

import { Cake, Notepad2, Message, Hashtag } from "iconsax-react";
import PostPreview from "./../PostPreview/index";

import { ProfileStyles } from "./styles";

const Profile = ({ userData, activities, postPublished }) => {
    return (
        <ProfileStyles>
            <div className="container fd-c">
                <div className="profile-wrapper pd-10">
                    <div className="short-info border bd-radius-5">
                        <div className="user-avatar">
                            <img src={userData?.avatar} alt="" />
                        </div>
                        <div className="edit-btn button-lg hover-button mg-10">
                            Chỉnh sửa
                        </div>
                        <div className="describe fd-c pdb-20">
                            <h1 className="name mg-20">{userData?.name}</h1>
                            <p className="description mgb-10">
                                {userData?.description}
                            </p>
                            <div className="birth">
                                <Cake size="25" color="currentColor" />
                                <p className="mg-20 mgl-10 text-light">
                                    Đã tham gia ngày{" "}
                                    {userData?.timeFormatted?.day} tháng{" "}
                                    {userData?.timeFormatted?.month},{" "}
                                    {userData?.timeFormatted?.year}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="body">
                    <div className="count-activity bd-radius-5 bg-post border pd-20 mgr-10">
                        <div className="activity hover-bg bd-radius-5">
                            <Notepad2 size="25" color="currentColor" />
                            <p className=" mgl-10">
                                Đã đăng {activities?.postPublished} bài viết
                            </p>
                        </div>
                        <div className="activity hover-bg bd-radius-5">
                            <Message size="25" color="currentColor" />
                            <p className="mgl-10">Đã comment {} bài</p>
                        </div>
                        <div className="activity hover-bg bd-radius-5">
                            <Hashtag size="25" color="currentColor" />
                            <p className="mgl-10">
                                Theo dõi {userData?.favoriteTopic?.length} #tag
                            </p>
                        </div>
                    </div>
                    <div className="post-list">
                        {postPublished?.map((post, index) => (
                            <PostPreview
                                key={index}
                                data={{ ownerData: userData, ...post }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </ProfileStyles>
    );
};

Profile.propTypes = {
    userData: PropTypes.object.isRequired,
    activities: PropTypes.object.isRequired,
    postPublished: PropTypes.array.isRequired,
};

export default Profile;
