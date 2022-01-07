import React from "react";
import { useSelector } from "react-redux";
import axios from "./../../utils/customAxios";

import Profile from "../../components/Profile";
import { timeDetails } from "../../utils";

export const UserProfilePage = () => {
    const VITE_API_URL_USER = import.meta.env.VITE_API_URL_USER;
    const userStore = useSelector((store) => store.auth);
    const [activitiesState, setActivitiesState] = React.useState({});
    const [userDataState, setUserDataState] = React.useState();
    const [postPublishedPreviewState, setPostPublishedPreviewState] =
        React.useState();

    React.useEffect(() => {
        setUserDataState((pre) => ({
            ...userStore,
            timeFormatted: timeDetails(userStore.createdAt),
        }));
    }, [userStore]);

    React.useEffect(() => {
        const getActivities = axios.get(
            `${VITE_API_URL_USER}/activities?username=${userStore.username}`
        );
        const getMyPosh = axios.get(
            `${VITE_API_URL_USER}/my-post-published?username=${userStore.username}&page=1&limit=5`
        );
        Promise.all([getActivities, getMyPosh]).then((res) => {
            setActivitiesState(res[0].data.data);
            setPostPublishedPreviewState(res[1].data.data);
        });
    }, [userStore]);

    return (
        <>
            <Profile
                userData={userDataState}
                activities={activitiesState}
                postPublish={postPublishedPreviewState}
            />
        </>
    );
};

export default UserProfilePage;
