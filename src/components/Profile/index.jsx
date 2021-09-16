import React from "react";
import "./style.scss";
import PropTypes from "prop-types";
import birthIcon from "./../../assets/icons/activity.svg";
import fileIcon from "./../../assets/icons/file-minus.svg";
import hashIcon from "./../../assets/icons/hash.svg";
import commentIcon from "./../../assets/icons/message-circle.svg";
import PostPreview from "./../PostPreview/index";
function Profile(props) {
    return (
        <>
            <div className="user-profile">
                <div className="bg"></div>
                <div className="container fd-c">
                    <div className="profile bd-primary bd-radius-5">
                        <div className="user-avatar">
                            <img src="https://picsum.photos/200" alt="" />
                        </div>
                        <div className="edit-btn button-lg mg-10">
                            Chỉnh sửa
                        </div>
                        <div className="describe fd-c pdb-20">
                            <h1 className="name mg-20">Nguyen Hung</h1>
                            <p className="description mgb-10">
                                hmmmm Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Magnam eum eaque tempora animi
                                voluptatum voluptates sit, minus ullam
                            </p>
                            <div className="birth df">
                                <img src={birthIcon} alt="" />
                                <p className="mgl-10 color-gray-text mg-20">
                                    Đã tham gia ngày 3 tháng 8, 2021
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="action pdt-10">
                        <div className="count-activity bd-radius-5 bg-post bd-primary pd-20 mgr-10">
                            <div className="activity">
                                <img src={fileIcon} alt="" />
                                <p className="color-text mgl-10">
                                    Đã đăng 2 bài viết
                                </p>
                            </div>
                            <div className="activity">
                                <img src={commentIcon} alt="" />
                                <p className="color-text mgl-10">
                                    Đã comment 16 bài
                                </p>
                            </div>
                            <div className="activity">
                                <img src={hashIcon} alt="" />
                                <p className="color-text mgl-10">
                                    Theo dõi 9 #tag
                                </p>
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
            </div>
        </>
    );
}

Profile.propTypes = {};

export default Profile;
