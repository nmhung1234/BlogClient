import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import logoIcon from "./../../logo.svg";
import xIcon from "./../../assets/icons/x.svg";
import copyIcon from "./../../assets/icons/copy.svg";
import "./style.css";
import { Link } from "react-router-dom";
import UploadButton from "../UploadButton";

export const UpPost = (props) => {
    return (
        <>
            <div className="nav-uppost df align-c pd-5">
                <div className=" df left align-c">
                    <Link to="/" className="pd-0 mg-0">
                        <img src={logoIcon} alt="Dev Việt Nam" />
                    </Link>
                    <p className="pdl-10 pdb-5" style={{ fontWeight: "bold" }}>
                        Tạo bài viết
                    </p>
                </div>
                <div>
                    <Link to="/" className="pd-0 mg-0">
                        <img src={xIcon} alt="Dev Việt Nam" />
                    </Link>
                </div>
            </div>
            <div className="write-space df fd-c bd-radius-5 bd-primary bg-w">
                <UploadButton content={"Thêm ảnh bìa"} />
                <textarea
                    autoFocus
                    className="title-post"
                    placeholder="Tiêu đề bài viết ..."
                ></textarea>

                {/* lấy link ảnh */}
                <div className="uploadButton df bd-radius-5">
                    <UploadButton content={"Tải ảnh lên"} />
                    <input className="input mgl-20" type="text" />
                    <div className="df align-c pdl-20">
                        <img src={copyIcon} alt="Dev Việt Nam" />
                        <p className="mg-0 pdl-5" style={{fontWeight: "bold"}}>Sao chép</p>
                    </div>
                </div>

                <textarea
                    className="content-post pd-20 mgt-20"
                    placeholder="Nội dung bài viết ..."
                ></textarea>
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
