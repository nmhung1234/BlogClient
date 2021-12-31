import React from "react";
import { useSelector } from "react-redux";
import { TickCircle, InfoCircle, CloseCircle, Add } from "iconsax-react";
import styled from "styled-components";

const ToastList = [
    {
        status: "success",
        icon: TickCircle,
        color: "#38A169",
    },
    {
        status: "info",
        icon: InfoCircle,
        color: "#1D72F3",
    },
    {
        status: "warning",
        icon: InfoCircle,
        color: "#FFCA00",
    },
    {
        status: "error",
        icon: CloseCircle,
        color: "#FF3B3B",
    },
];
const ToastStyles = styled.div`
    position: fixed;
    top: -70px;
    left: 10px;
    z-index: 9999;
    background-color: ${(props) => props.color};
    border-radius: 10px;
    width: 300px;
    max-width: 400px;
    height: fit-content;
    color: white;
    padding: 20px 20px;
    padding-left: 45px;
    padding-top: 10px;
    text-transform: capitalize;
    box-shadow: 0 0 10px #00000088; 
    animation: showToast 6s ease-in-out;

    & .icon-status {
        position: absolute;
        top: 10px;
        left: 10px;
    }
    & .icon-close {
        position: absolute;
        top: 3px;
        right: 5px;
        transform: rotate(45deg);
    }
    & p {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-word;
    }
    @keyframes showToast {
        0% {
            top: -70px;
        }
        20% {
            top: 10px;
        }
        80% {
            top: 10px;
        }
        100% {
            top: -70px;
        }
    }
`;

const Toast = () => {
    const toastStore = useSelector((state) => state.toast);
    const [showToast, setShowToast] = React.useState(false);

    const handleCloseToast = () => {
        setShowToast(false);
    };

    React.useEffect(() => {
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, 6000);
    }, [toastStore]);

    let render = ToastList.map((toast) => {
        if (showToast && toastStore.type === toast.status) {
            return (
                <ToastStyles color={toast.color}>
                    <toast.icon
                        className="icon-status"
                        size="25"
                        color="white"
                        variant="Bold"
                    />
                    <Add className="icon-close" size="25" color="white" onClick={handleCloseToast}/>
                    <h4>{toast.status}</h4>
                    <p>{toastStore.message}</p>
                </ToastStyles>
            );
        }
    });
    return render;
};

export default Toast;
