import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Select, Tooltip } from "antd";
import MDEditor from "@uiw/react-md-editor";
import { CloseCircle, ClipboardText } from "iconsax-react";

import UploadButton from "../../components/UploadButton";
import PostDetail from "./../../components/PostDetail";
import Slider from "./../../components/Slider";

import { upPostRequest } from "../../action/post";
import { getAllTagRequest } from "../../action/tag";

// import "./ant.scss";
import "./style.scss";

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

    const handleChange = (selectedItem) => {
        setSelectedItems(() => selectedItem);
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
    const handleDeleteCover = () => {
        setLinkImgCover("");
    };
    const OPTIONS = tagState.map((ele) => ele.name);
    const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));
    return (
        <>
            <div>
                <div className="nav-uppost">
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
                    <CloseCircle
                        size="25"
                        color="currentColor"
                        onClick={() => {
                            history.back();
                        }}
                    />
                </div>
                <div className="uppost df fd-c">
                    <div
                        className="write-container"
                        style={
                            action == "Chỉnh sửa"
                                ? { display: "block" }
                                : { display: "none" }
                        }
                    >
                        <div className="write-space fd-c bd-radius-5 border bg-post mgb-20">
                            <div className="editCover">
                                {linkImgCover ? (
                                    <div className="cover-img">
                                        <img src={linkImgCover} alt="" />
                                    </div>
                                ) : null}

                                <UploadButton
                                    content={"Thêm ảnh bìa"}
                                    linkImgRes={getImgLink}
                                />
                                {linkImgCover ? (
                                    <div
                                        className="button-sm mgl-20 remove-cover"
                                        onClick={handleDeleteCover}
                                    >
                                        Xóa ảnh bìa
                                    </div>
                                ) : null}
                            </div>
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
                                <div className="copy pdl-20 cursor-pointer ">
                                    <ClipboardText
                                        size="25"
                                        color="currentColor"
                                    />
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
                        <div
                            className="button-lg mgb-20"
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
