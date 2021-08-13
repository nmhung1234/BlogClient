import React from "react";
import "./style.css";
import { Upload, message, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
        authorization: "authorization-text",
    },
    onChange(info) {
        if (info.file.status !== "uploading") {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === "done") {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === "error") {
            message.error(`${info.file.name} file upload failed.`);
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

function UploadButton(props) {
    const{ content } = props;
    return (
        <Upload {...props}>
            <Button icon={<UploadOutlined />}>{content}</Button>
        </Upload>
    );
}

// UploadButton.propTypes = {

// }

export default UploadButton;
