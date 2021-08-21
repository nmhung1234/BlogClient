import React from "react";
import "./style.css";
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
                <div className="container df align-c fd-c">
                    <div className="profile bd-primary bd-radius-5 df justify-c">
                        <div className="user-avatar df justify-c align-c">
                            <img src="https://picsum.photos/200" alt="" />
                        </div>
                        <div className="edit-btn button-lg mg-10">
                            Chỉnh sửa
                        </div>
                        <div className="describe df fd-c align-c">
                            <h1 className="name mg-20">Nguyen Hung</h1>
                            <p className="description mgb-10">hmmmm</p>
                            <div className="birth df">
                                <img src={birthIcon} alt="" />
                                <p className="mgl-10 color-gray">
                                    Đã tham gia ngày 3 tháng 8, 2021
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="df action pdt-10">
                        <div className="count-activity bd-radius-5 bg-w bd-primary pd-20 mgr-10">
                            <div className="df align-c pd-10">
                                <img src={fileIcon} alt="" />
                                <p className="color-text mgl-10">
                                    Đã đăng 2 bài viết
                                </p>
                            </div>
                            <div className="df align-c pd-10">
                                <img src={commentIcon} alt="" />
                                <p className="color-text mgl-10">
                                    Đã comment 16 bài
                                </p>
                            </div>
                            <div className="df align-c pd-10">
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
