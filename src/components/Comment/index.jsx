import React from "react";
import PropTypes from "prop-types";
import MDEditor from "@uiw/react-md-editor";

import "./style.scss";
let stringDemo =
    "Very awesome! I didn't watch the video but followed the instructions. VS Code right inthe browser opened up to whatever repo /branch you are on when you pressed theperiod (.) key. A great feature is if yousync your extensions from your locallyinstalled VS Code,\t```hi``` you can access them inthe in-browser editor.";
function Comment(props) {
    return (
        <>
            <div className="comment-container bd-primary">
                <h2 className="pdb-20" style={{ textAlign: "left" }}>
                    Bình luận (2)
                </h2>
                {/* user write comment */}
                <div className="write-comment df pdt-20">
                    <img
                        className="avatar mgl-0"
                        src="https://picsum.photos/800/600"
                        alt=""
                    />
                    <div className="right pdl-20">
                        <textarea
                            id="comment"
                            className="input pd-10 area-comment"
                            type="text"
                            placeholder="Thêm bình luận ..."
                        />
                        <div className="noti df mgt-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 icon-color icon-sm"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span className="mgl-5">
                                Hỗ trợ cú pháp markdown
                            </span>
                        </div>
                        <div className="upComment button-lg mgt-20">Đăng</div>
                    </div>
                </div>
                {/* comment của khách */}
                <div className="guest-comment df pdt-20 fd-c">
                    <div className="df">
                        <img
                            className="avatar mgl-0"
                            src="https://picsum.photos/800/600"
                            alt=""
                        />
                        <div className="right pdl-5">
                            <div className="right-wrapper df df-c bd-primary bd-radius-5 pd-20 fd-c align-fs">
                                <div className="guest-info">
                                    nmhung{" "}
                                    <span className="text-light"
                                    >
                                        • 12 thg 8
                                    </span>
                                </div>
                                <MDEditor.Markdown
                                    className="editor pd-10 guest-comment-content"
                                    source={stringDemo}
                                />
                                <p className="action text-light">•••</p>
                            </div>
                            <div className="df">
                                <div className="df align-c hover-bg pd-5 mg-10 bd-radius-5 cursor-pointer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 icon-color icon-sm mgr-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                        />
                                    </svg>
                                    <p>Thích</p>
                                </div>
                                <div className="df align-c hover-bg pd-5 mg-10 bd-radius-5 cursor-pointer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 icon-color icon-sm mgr-10"
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
                                    <p>Phản hồi</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* repy comment khách */}
                    <div>
                        <div
                            className="guest-comment df pdt-20"
                            style={{ paddingLeft: "40px" }}
                        >
                            <img
                                className="avatar mgl-0"
                                src="https://picsum.photos/800/600"
                                alt=""
                            />
                            <div className="right pdl-5">
                                <div className="df df-c bd-primary bd-radius-5 pd-20 fd-c align-fs">
                                    <div className="guest-info">
                                        nmhung{" "}
                                        <span className="text-light"
                                        >
                                            • 12 thg 8
                                        </span>
                                    </div>
                                    <MDEditor.Markdown
                                        className="editor pd-10 guest-comment-content"
                                        source={stringDemo}
                                    />
                                    <p className="action">•••</p>
                                </div>
                                <div className="df">
                                    <div className="df align-c hover-bg pd-5 mg-10 bd-radius-5 cursor-pointer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 icon-color icon-sm mgr-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                            />
                                        </svg>
                                        <p>Thích</p>
                                    </div>
                                    {/* <div className="df align-c hover-bg pd-5 mg-10 bd-radius-5 cursor-pointer">
                                        <img
                                            className="icon mgr-5"
                                            src={commentIcon}
                                            alt=""
                                        />
                                        <p>Phản hồi</p>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Comment.propTypes = {};

export default Comment;
