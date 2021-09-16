import React from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import MDEditor from "@uiw/react-md-editor";
import { Link } from "react-router-dom";
import { Select } from "antd";
import xIcon from "./../../assets/icons/x.svg";
import copyIcon from "./../../assets/icons/copy.svg";
import UploadButton from "../../components/UploadButton";
import PostDetail from "./../../components/PostDetail";
import Slider from "./../../components/Slider";

import { upPostRequest } from "../../action/post";
import { getAllTagRequest } from "../../action/tag";

import "./style.scss";
import "./ant.scss";

const UpPost = (props) => {
    const { getAllTags, tagStore, createPostReq } = props;
    const [action, setAction] = React.useState("Chỉnh sửa");
    const [linkImgCover, setLinkImgCover] = React.useState("");
    const [titlePost, setTitlePost] = React.useState("");
    const [value, setValue] = React.useState("Nhập nội dung...");
    const [linkImg, setLinkImg] = React.useState("");
    const [selectedItems, setSelectedItems] = React.useState([]);
    const [tagState, setTagState] = React.useState([]);

    React.useEffect(() => {
        setTagState(tagStore);
    }, [tagStore]);

    React.useEffect(() => {
        getAllTags();
    }, []);

    const handleChange = async (selectedItem) => {
        await setSelectedItems(() => selectedItem);
    };
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
    const handleButtonUpPost = () => {
        const data = {
            owner_id: "610ab32f5e2bafb87ef87e6c",
            title: titlePost,
            coverImg: linkImgCover,
            content: value,
            tags: selectedItems,
        };
        createPostReq(data);
    };
    const OPTIONS = tagState.map((ele) => ele.name);
    const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));
    return (
        <>
            <div>
                <div className="nav-uppost pd-5">
                    <div className="left">
                        <Link to="/" className="pd-0 mg-0">
                            {/* <img src={logoIcon} alt="Dev Việt Nam" /> */}
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
                        className="write-container df"
                        style={
                            action == "Chỉnh sửa"
                                ? { display: "flex" }
                                : { display: "none" }
                        }
                    >
                        <div className="write-space fd-c bd-radius-5 bd-primary bg-post mgb-20">
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
                            <Select
                                mode="multiple"
                                placeholder="#Hastag cho bài viết"
                                value={selectedItems}
                                onChange={handleChange}
                                style={{
                                    width: "100%",
                                    marginBottom: "50px",
                                }}
                            >
                                {filteredOptions.map((item) => (
                                    <Select.Option key={item} value={item}>
                                        {item}
                                    </Select.Option>
                                ))}
                            </Select>
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
                                <div className="copy pdl-20 cursor-pointer">
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
                            onClick={handleButtonUpPost}
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
                        ? { display: "flex" }
                        : { display: "none" }
                }
            >
                <PostDetail
                    data={{
                        username: "nmhung",
                        owner_post: {
                            title: titlePost,
                            coverImg: linkImgCover,
                            content: value,
                            tags: selectedItems,
                            lastmodified: "2021-08-23T16:40:37.818Z",
                        },
                        tags: selectedItems,
                    }}
                />
            </div>
        </>
    );
};

// UpPost.propTypes = {
//     props: PropTypes
// }

const mapStateToProps = (state) => {
    return {
        tagStore: state.tag,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllTags: () => {
            dispatch(getAllTagRequest());
        },
        createPostReq: (data) => {
            dispatch(upPostRequest(data));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpPost);
// export default UpPost;
