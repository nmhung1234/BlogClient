import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { MultiSelect, Loader } from "@mantine/core";
import MDEditor from "@uiw/react-md-editor";
import { Add, ClipboardText } from "iconsax-react";

import UploadButton from "../../components/UploadButton";
import PostDetail from "./../../components/PostDetail";
import Slider from "../../components/SliderBar";

import { upPostRequest } from "../../action/post";
import { getAllTagRequest } from "../../action/tag";
import { toastError, toastSuccess } from "../../action/toast";

// import "./style.scss";
import { UpPostStyles } from "./styles";

const UpPostPage = () => {
    const history = useHistory();
    const TagStore = useSelector((store) => store.tag);
    const UserDataStore = useSelector((store) => store.auth);
    const dispatch = useDispatch();

    const [action, setAction] = React.useState("Chỉnh sửa");
    const [linkImgCover, setLinkImgCover] = React.useState("");
    const [titlePost, setTitlePost] = React.useState("");
    const [selectedItems, setSelectedItems] = React.useState([]);
    const [tagState, setTagState] = React.useState([]);
    const [content, setContent] = React.useState("Nhập nội dung...");
    const [linkImg, setLinkImg] = React.useState("");

    const [upPostStatus, setUpPostStatus] = React.useState(false);

    React.useEffect(() => {
        setTagState(TagStore);
    }, [TagStore]);

    React.useEffect(() => {
        dispatch(getAllTagRequest());
    }, []);

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
    const handleUpPost = () => {
        if (!upPostStatus && titlePost && titlePost) {
            const data = {
                owner_id: "610ab32f5e2bafb87ef87e6c",
                title: titlePost,
                coverImg: linkImgCover,
                content: content,
                tags: selectedItems,
            };
            setUpPostStatus(true);
            dispatch(upPostRequest(data)).then((res) => {
                if (res?.data?.success) {
                    dispatch(toastSuccess("Up Post Successfully!"));
                    setUpPostStatus(false);
                    history.push(
                        `/post/${UserDataStore.username}/${res.data.data.slugString}`
                    );
                } else {
                    dispatch(toastError("Up Post Error"));
                }
            });
        } else {
            dispatch(toastError("Vui lòng điền nội dung cho bài viết!"));
        }
    };
    const handleDeleteCover = () => {
        setLinkImgCover("");
        dispatch(toastSuccess("Delete Cover Successfully"));
    };
    const OPTIONS = tagState.map((ele) => ele.name);
    return (
        <UpPostStyles upPostStatus={upPostStatus}>
            <div>
                <div className="nav-uppost">
                    <Slider
                        title={""}
                        data={["Chỉnh sửa", "Xem trước"]}
                        getAction={getAction}
                    />
                    <Add
                        style={{ transform: "rotate(45deg)" }}
                        size="50"
                        color="currentColor"
                        onClick={() => {
                            history.goBack();
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
                            <MultiSelect
                                style={{
                                    width: "100%",
                                    marginBottom: "50px",
                                }}
                                data={OPTIONS}
                                searchable
                                nothingFound="Nothing found"
                                clearable
                                placeholder="#Hastag cho bài viết"
                                onChange={setSelectedItems}
                            />
                            {/* lấy link ảnh */}
                            <div className="makeLinkImg df bd-radius-5">
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
                                    value={content}
                                    onChange={setContent}
                                    hideToolbar={true}
                                    visiableDragbar={false}
                                />
                            </div>
                        </div>
                        <div
                            className="button-lg hover-button uppost-btn mgb-20"
                            style={
                                action == "Chỉnh sửa"
                                    ? { display: "flex" }
                                    : { display: "none" }
                            }
                            onClick={handleUpPost}
                        >
                            {upPostStatus ? (
                                <div className="df align-c">
                                    <Loader color="gray" size="xs" />
                                    &nbsp;{" "}
                                </div>
                            ) : (
                                ""
                            )}
                            <span>Đăng bài viết</span>
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
                            content: content,
                            tags: selectedItems,
                            lastmodified: "2021-08-23T16:40:37.818Z",
                        },
                        tags: selectedItems,
                    }}
                />
            </div>
        </UpPostStyles>
    );
};

// UpPost.propTypes = {
//     props: PropTypes
// }

export default UpPostPage;
