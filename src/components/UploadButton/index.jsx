import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Loader } from "@mantine/core";
import { useDispatch } from "react-redux";

import { toastError, toastSuccess } from "../../action/toast";

const UploadButton = (props) => {
    const API_URL_USER = import.meta.env.VITE_API_URL_USER;
    const { content, linkImgRes } = props;
    const dispatch = useDispatch();

    const [imageData, setImageData] = useState();
    const [currentImage, setCurrentImage] = useState();
    const [percent, setPercent] = useState(0);
    const refImg = useRef();
    const handleTriggleFile = () => {
        refImg.current.click();
    };
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setCurrentImage(img);
            const formData = new FormData();
            // Update the formData object => binary data
            formData.append("file", img, img.name);
            // Details of the uploaded file
            setImageData(formData);
        }
    };

    useEffect(() => {
        const config = {
            onUploadProgress: (progressEvent) => {
                let format = (
                    (progressEvent.loaded / progressEvent.total) *
                    100
                ).toFixed(0);
                console.log(format);
                setPercent(format);
            },
        };
        imageData && axios
            .post(`${API_URL_USER}/upload`, imageData, config)
            .then((res) => {
                console.log(res);
                linkImgRes({ url: res.data.data, content });
                dispatch(
                    toastSuccess(
                        `${currentImage?.name || ""} file uploaded successfully`
                    )
                );
                setPercent(0);
            })
            .catch((error) => {
                dispatch(
                    toastError(
                        `${currentImage?.name || ""} file uploaded failed`
                    )
                );
                setPercent(0);
            });
    }, [imageData]);

    return (
        <>
            <div className="button-sm hover-button" onClick={handleTriggleFile}>
                {percent == 0 ? (
                    content
                ) : (
                    <div className="df align-c">
                        <Loader color="gray" size="xs" />
                        <span>&nbsp; Đang tải lên {percent} %</span>
                    </div>
                )}
            </div>
            <input
                type="file"
                name="myImage"
                ref={refImg}
                onChange={onImageChange}
                style={{ display: "none" }}
            />
        </>
    );
};

export default UploadButton;
