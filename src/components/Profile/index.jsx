import React from "react";
import "./style.scss";
import PropTypes from "prop-types";
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
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 icon-color icon-lg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                                    />
                                </svg>
                                <p className="mgl-10 text-light mg-20">
                                    Đã tham gia ngày 3 tháng 8, 2021
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="action pdt-10">
                        <div className="count-activity bd-radius-5 bg-post bd-primary pd-20 mgr-10">
                            <div className="activity">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 icon-color icon-md"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                </svg>
                                <p className=" mgl-10">
                                    Đã đăng 2 bài viết
                                </p>
                            </div>
                            <div className="activity">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 icon-color icon-md"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                    />
                                </svg>
                                <p className="mgl-10">
                                    Đã comment 16 bài
                                </p>
                            </div>
                            <div className="activity">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 icon-color icon-md"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                                    />
                                </svg>
                                <p className="mgl-10">
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
