import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import heartIcon from "./../../assets/icons/heart.svg";
import commentIcon from "./../../assets/icons/message-circle.svg";

function Comment(props) {
    return (
        <>
            <div className="comment-container bd-primary">
                <h2 className="pdb-20" style={{ textAlign: "left" }}>
                    Bình luận (2)
                </h2>
                {/* user write comment */}
                <div className="write-comment df pdt-20">
                <img className="avatar mgl-0" src="https://picsum.photos/800/600" alt="" />
                    <div className="right pdl-20">
                        <textarea
                            className="input pd-10 area-comment"
                            type="text"
                            placeholder="Thêm bình luận ..."
                        />
                        <div className="button-lg mgt-20">Đăng</div>
                    </div>
                </div>
                {/* comment của khách */}
                <div className="guest-comment df pdt-20 fd-c">
                    <div className="df">
                    <img className="avatar mgl-0" src="https://picsum.photos/800/600" alt="" />
                        <div className="right pdl-5">
                            <div className="df df-c bd-primary bd-radius-5 pd-20 fd-c align-fs">
                                <div className="guest-info">
                                    nmhung{" "}
                                    <span
                                        style={{
                                            color: "var(--color-text-gray)",
                                        }}
                                    >
                                        • 12 thg 8
                                    </span>
                                </div>
                                <p className="guest-comment-content pd-10">
                                    Very awesome! I didn't watch the video but
                                    followed the instructions. VS Code right in
                                    the browser opened up to whatever repo /
                                    branch you are on when you pressed the
                                    period (.) key. A great feature is if you
                                    sync your extensions from your locally
                                    installed VS Code, you can access them in
                                    the in-browser editor.
                                </p>
                                <p className="action">•••</p>
                            </div>
                            <div className="df">
                                <div className="df align-c hover-secondary-bg pd-5 mg-10 bd-radius-5 cursor-pointer">
                                    <img
                                        className="icon mgr-5"
                                        src={heartIcon}
                                        alt=""
                                    />
                                    <p>Thích</p>
                                </div>
                                <div className="df align-c hover-secondary-bg pd-5 mg-10 bd-radius-5 cursor-pointer">
                                    <img
                                        className="icon mgr-5"
                                        src={commentIcon}
                                        alt=""
                                    />
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
                           <img className="avatar mgl-0" src="https://picsum.photos/800/600" alt="" />
                            <div className="right pdl-5">
                                <div className="df df-c bd-primary bd-radius-5 pd-20 fd-c align-fs">
                                    <div className="guest-info">
                                        nmhung{" "}
                                        <span
                                            style={{
                                                color: "var(--color-text-gray)",
                                            }}
                                        >
                                            • 12 thg 8
                                        </span>
                                    </div>
                                    <p className="guest-comment-content pd-10">
                                        Very awesome! I didn't watch the video
                                        but followed the instructions. VS Code
                                        right in the browser opened up to
                                        whatever repo / branch you are on when
                                        you pressed the period (.) key. A great
                                        feature is if you sync your extensions
                                        from your locally installed VS Code, you
                                        can access them in the in-browser
                                        editor.
                                    </p>
                                    <p className="action">•••</p>
                                </div>
                                <div className="df">
                                    <div className="df align-c hover-secondary-bg pd-5 mg-10 bd-radius-5 cursor-pointer">
                                        <img
                                            className="icon mgr-5"
                                            src={heartIcon}
                                            alt=""
                                        />
                                        <p>Thích</p>
                                    </div>
                                    {/* <div className="df align-c hover-secondary-bg pd-5 mg-10 bd-radius-5 cursor-pointer">
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
