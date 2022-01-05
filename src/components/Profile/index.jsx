import React from "react";
import PropTypes from "prop-types";
import { Cake, Notepad2, Message, Hashtag } from "iconsax-react";
import PostPreview from "./../PostPreview/index";

import { ProfileStyles } from "./styles";
const Profile = () => {
    return (
        <ProfileStyles>
            {/* <div className="bg"></div> */}
            <div className="container fd-c">
                <div className="profile-wrapper pd-10">
                    <div className="short-info border bd-radius-5">
                        <div className="user-avatar">
                            <img src="https://picsum.photos/200" alt="" />
                        </div>
                        <div className="edit-btn button-lg hover-button mg-10">
                            Chỉnh sửa
                        </div>
                        <div className="describe fd-c pdb-20">
                            <h1 className="name mg-20">Nguyen Hung</h1>
                            <p className="description mgb-10">
                                hmmmm Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Magnam eum eaque tempora animi
                                voluptatum voluptates sit, minus ullam
                            </p>
                            <div className="birth">
                                <Cake size="25" color="currentColor" />
                                <p className="mg-20 mgl-10 text-light">
                                    Đã tham gia ngày 3 tháng 8, 2021
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="body">
                    <div className="count-activity bd-radius-5 bg-post border pd-20 mgr-10">
                        <div className="activity hover-bg bd-radius-5">
                            <Notepad2 size="25" color="currentColor" />
                            <p className=" mgl-10">Đã đăng 2 bài viết</p>
                        </div>
                        <div className="activity hover-bg bd-radius-5">
                            <Message size="25" color="currentColor" />
                            <p className="mgl-10">Đã comment 16 bài</p>
                        </div>
                        <div className="activity hover-bg bd-radius-5">
                            <Hashtag size="25" color="currentColor" />
                            <p className="mgl-10">Theo dõi 9 #tag</p>
                        </div>
                    </div>
                    <div className="post-list">
                        <PostPreview />
                        <PostPreview />
                        <PostPreview />
                        <PostPreview />
                        <PostPreview />
                        <PostPreview />
                    </div>
                </div>
            </div>
        </ProfileStyles>
    );
};

Profile.propTypes = {};

export default Profile;
