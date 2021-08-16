import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MDEditor from "@uiw/react-md-editor";
import { Link } from "react-router-dom";
import "./style.css";
import logoIcon from "./../../logo.svg";
import xIcon from "./../../assets/icons/x.svg";
import copyIcon from "./../../assets/icons/copy.svg";
import UploadButton from "../../components/UploadButton";
import PostDetail from "./../../components/PostDetail";
import Slider from "./../../components/Slider";

export const UpPost = (props) => {
    const [action, setAction] = React.useState("Chỉnh sửa");
    const [linkImgCover, setLinkImgCover] = React.useState("");
    const [titlePost, setTitlePost] = React.useState("");
    const [value, setValue] = React.useState("Nhập nội dung...");
    const [linkImg, setLinkImg] = React.useState("");
    const getAction = (action) => {
        setAction(action);
    };
    const getImgLink = (link) => {
        if (link.url) {
            if (link.content == "Thêm ảnh bìa") {
                setLinkImgCover(link.url);
            } else {
                setLinkImg(`![alt](${link.url})`);
            }
        }
    };
    return (
        <>
            <div>
                <div
                    className="nav-uppost df align-c pd-5"
                    style={{ justifyContent: "space-evenly" }}
                >
                    <div className=" df left align-c">
                        <Link to="/" className="pd-0 mg-0">
                            <img src={logoIcon} alt="Dev Việt Nam" />
                        </Link>
                    </div>
                    <Slider
                        title={""}
                        data={["Chỉnh sửa", "Xem trước"]}
                        getAction={getAction}
                    />
                    <img
                        src={xIcon}
                        alt="Close"
                        onClick={() => {
                            history.back();
                        }}
                    />
                </div>
                <div className="uppost df fd-c">
                    <div
                        className="write-container df "
                        style={
                            action == "Chỉnh sửa"
                                ? { display: "flex" }
                                : { display: "none" }
                        }
                    >
                        <div className="write-space df fd-c bd-radius-5 bd-primary bg-w mgb-20">
                            <UploadButton
                                content={"Thêm ảnh bìa"}
                                linkImgRes={getImgLink}
                            />
                            <textarea
                                autoFocus
                                className="title-post mgt-20 mgb-20"
                                placeholder="Tiêu đề bài viết ..."
                                value={titlePost}
                                onChange={(e) => setTitlePost(e.target.value)}
                            ></textarea>

                            {/* lấy link ảnh */}
                            <div className="uploadButton df bd-radius-5">
                                <UploadButton
                                    content={"Tải ảnh lên"}
                                    linkImgRes={getImgLink}
                                />
                                <input
                                    className="input mgl-20"
                                    type="text"
                                    value={linkImg}
                                />
                                <div className="df align-c pdl-20 cursor-pointer">
                                    <img src={copyIcon} alt="copy" />
                                    <p
                                        className="mg-0 pdl-5"
                                        style={{ fontWeight: "bold" }}
                                    >
                                        Sao chép
                                    </p>
                                </div>
                            </div>
                            <div style={{ width: "100%" }}>
                                <MDEditor
                                    className="editor pd-10 mgt-20"
                                    preview={"edit"}
                                    value={value}
                                    onChange={setValue}
                                    hideToolbar={true}
                                    visiableDragbar={false}
                                />
                            </div>
                        </div>
                        <div className=" df fd-c tutorial mgl-20">
                            <h3>Hướng dẫn viết bài</h3>
                            <p>
                                Sử dụng{" "}
                                <a
                                    style={{ color: "var(--color-primary)" }}
                                    target="_blank"
                                    href="https://viblo.asia/helps/cach-su-dung-markdown-bxjvZYnwkJZ"
                                >
                                    Markdown
                                </a>{" "}
                                để viết và định dạng bài viết
                            </p>
                        </div>
                    </div>
                    <div
                        className="df"
                        style={{ width: "70%", margin: "0 auto" }}
                    >
                        <div
                            className="button-lg mgt-20 mgb-20"
                            style={
                                action == "Chỉnh sửa"
                                    ? { display: "flex" }
                                    : { display: "none" }
                            }
                        >
                            Đăng
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="previewpost df justify-c"
                style={
                    action == "Xem trước"
                        ? { display: "block" }
                        : { display: "none" }
                }
            >
                <PostDetail
                    data={{
                        cover: linkImgCover,
                        title: titlePost,
                        content: value,
                    }}
                />
            </div>
        </>
    );
};

// UpPost.propTypes = {
//     props: PropTypes
// }

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(UpPost)
export default UpPost;
