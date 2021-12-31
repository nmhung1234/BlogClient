import React from "react";
import { Upload, Button } from "antd";
import { useDispatch } from "react-redux";
import { UploadOutlined } from "@ant-design/icons";
import API_URL from "./../../constant/Config";

import "./style.scss";
import { toastError, toastSuccess } from "../../action/toast";

function UploadButton(props) {
    const dispatch = useDispatch();
    const props2 = {
        name: "file",
        action: `${API_URL}api/user/upload`,
        maxCount: 1,
        onChange(info) {
            console.log(info);
            if (info.file.status !== "uploading") {
                // console.log(info.file, info.fileList);
            }
            if (info.file.status === "done" && info.file.response.data) {
                console.log(info.file.response);
                linkImgRes({ url: info.file.response.data, content });
                dispatch(toastSuccess(`${info.file.name} file uploaded successfully`))
                // message.success(`${info.file.name} file uploaded successfully`);
            } else if (
                info.file.status === "done" &&
                !info.file.response.success
            ) {
                dispatch(toastError(`${info.file.name} file uploaded failed`))
                // message.error(`${info.file.name} file upload failed.`);
            }
        },
        progress: {
            strokeColor: {
                "0%": "#108ee9",
                "100%": "#87d068",
            },
            strokeWidth: 3,
            format: (percent) => `${parseFloat(percent.toFixed(2))}%`,
        },
    };
    const { content, linkImgRes } = props;
    return (
        <Upload {...props2}>
            <Button className="button-sm" icon={<UploadOutlined />}>{content}</Button>
        </Upload>
    );
}

// UploadButton.propTypes = {

// }

export default UploadButton;
