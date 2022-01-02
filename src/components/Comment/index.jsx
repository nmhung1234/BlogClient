import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import { InfoCircle, Message, Heart, More } from "iconsax-react";

import { CommentStyle } from "./styles";

const Comment = () => {
    const stringDemo =
        "Very awesome! I didn't watch the video but followed the instructions. VS Code right inthe browser opened up to whatever repo /branch you are on when you pressed theperiod (.) key. A great feature is if yousync your extensions from your locallyinstalled VS Code,\t```hi``` you can access them inthe in-browser editor.";
    return (
        <>
            <CommentStyle className="border">
                <h2 className="pdb-20" style={{ textAlign: "left" }}>
                    Bình luận (2)
                </h2>
                {/* user write comment */}
                <div className="write-comment df pdt-20" id="comment">
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
                        <div className="noti df mgt-5 align-c">
                            <InfoCircle size="18" color="currentColor" />
                            <span
                                className="mgl-5"
                                style={{ fontSize: "13px" }}
                            >
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
                            className="avatar mgl-0 mgt-15"
                            src="https://picsum.photos/800/600"
                            alt=""
                        />
                        <div className="right pdl-5">
                            <div className="right-wrapper df df-c border bd-radius-5 pd-20 fd-c align-fs">
                                <div className="guest-info df">
                                    <Link to="#">
                                        <h4 className="hover-bg pdl-5 pdr-5 bd-radius-5">
                                            nmhung
                                        </h4>
                                    </Link>
                                    <span className="text-light">
                                        &nbsp;•&nbsp;
                                    </span>
                                    <span className="text-light">12 thg 8</span>
                                </div>
                                <MDEditor.Markdown
                                    className="editor pd-10 guest-comment-content"
                                    source={stringDemo}
                                />
                                <More
                                    className="action hover-bg bd-cycle pd-5"
                                    size="30"
                                    color="currentColor"
                                />
                            </div>
                            <div className="df">
                                <div className="df align-c hover-bg pd-5 mg-10 bd-radius-5 cursor-pointer">
                                    <Heart size="20" color="currentColor" />
                                    <p className="pdl-10">Thích</p>
                                </div>
                                <div className="df align-c hover-bg pd-5 mg-10 bd-radius-5 cursor-pointer">
                                    <Message size="20" color="currentColor" />
                                    <p className="pdl-10">Phản hồi</p>
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
                                className="avatar mgl-0 mgt-15"
                                src="https://picsum.photos/800/600"
                                alt=""
                            />
                            <div className="right pdl-5">
                                <div className="df df-c border bd-radius-5 pd-20 fd-c align-fs">
                                    <div className="guest-info df">
                                        <Link to="#">
                                            <h4 className="hover-bg pdl-5 pdr-5 bd-radius-5">
                                                nmhung
                                            </h4>
                                        </Link>
                                        <span className="text-light">
                                            &nbsp;•&nbsp;
                                        </span>
                                        <span className="text-light">
                                            12 thg 8
                                        </span>
                                    </div>
                                    <MDEditor.Markdown
                                        className="editor pd-10 guest-comment-content"
                                        source={stringDemo}
                                    />
                                    <More
                                        className="action hover-bg bd-cycle pd-5"
                                        size="30"
                                        color="currentColor"
                                    />
                                </div>
                                <div className="df">
                                    <div className="df align-c hover-bg pd-5 mg-10 bd-radius-5 cursor-pointer">
                                        <Heart size="20" color="currentColor" />
                                        <p className="pdl-10"> Thích</p>
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
            </CommentStyle>
        </>
    );
};

Comment.propTypes = {};

export default Comment;
