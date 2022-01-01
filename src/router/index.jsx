import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { useNotifications } from "@mantine/notifications";
import { CheckIcon, Cross1Icon } from "@modulz/radix-icons";

import PublicRouter from "./publicRouter";
import PrivateRouter from "./privateRouter";
import useNetwork from "../hook";

import Header from "../components/Header";

import { toastError, toastSuccess } from "../action/toast";
import "./style.scss";
const ToastList = [
    {
        type: "success",
        title: "Thành công",
        icon: <CheckIcon color="white" />,
        color: "green",
    },
    {
        type: "info",
        title: "Thông báo",
        // icon: <InfoCircle color="white" />,
        color: "#1D72F3",
    },
    {
        type: "warning",
        title: "Cảnh báo",
        // icon: <InfoCircle color="white" />,
        color: "#FFCA00",
    },
    {
        type: "error",
        title: "Đã xảy ra lỗi",
        icon: <Cross1Icon color="white" />,
        color: "red",
    },
];

const Router = () => {
    const userDataStore = useSelector((store) => store.auth);
    const toast = useSelector((store) => store.toast);
    const dispatch = useDispatch();
    const isOnline = useNetwork();
    const notifications = useNotifications();

    const [userDataState, setUserDataState] = React.useState();
    const [onlineState, setOnlineState] = React.useState(true);
    React.useEffect(() => {
        setUserDataState(userDataStore);
    }, [userDataStore]);

    React.useEffect(() => {
        if (isOnline != onlineState) {
            setOnlineState(isOnline);
            if (isOnline) {
                dispatch(toastSuccess("Kết nối mạng thành công"));
            } else {
                dispatch(toastError("Lỗi kết nối mạng"));
            }
        }
    }, [isOnline]);

    React.useEffect(() => {
        const index = ToastList.findIndex((item) => item.type === toast.type);

        if (toast.type) {
            notifications.showNotification({
                title: ToastList[index].title,
                message: toast.message,
                color: ToastList[index].color,
                icon: ToastList[index].icon || false,
                autoClose: 5000,
            });
        }
    }, [toast]);
    return (
        <>
            <Header />
            <div className="Router-wrapper">
                {localStorage.getItem("tk") ? (
                    <PrivateRouter />
                ) : (
                    <PublicRouter />
                )}
            </div>
        </>
    );
};

export default Router;
