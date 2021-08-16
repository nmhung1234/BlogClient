import React from "react";
import "./style.css";
import { Upload, message, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import API_URL from "./../../constant/Config";

function UploadButton(props) {
    const props2 = {
        name: "file",
        action: `${API_URL}/upload`,
        headers: {
            authorization: "ejyakbafalafkafbabf.afiabfbafkafaf",
        },
        maxCount: 1,
        onChange(info) {
            if (info.file.status !== "uploading") {
                // console.log(info.file, info.fileList);
            }
            if (info.file.status === "done") {
                // console.log(info.file.response);
                    linkImgRes({url: info.file.response, content})
                
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
    const { content, linkImgRes } = props;
    return (
        <Upload {...props2}>
            <Button icon={<UploadOutlined />}>{content}</Button>
        </Upload>
    );
}

// UploadButton.propTypes = {

// }

export default UploadButton;
