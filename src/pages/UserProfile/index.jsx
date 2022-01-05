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

    React.useEffect(() => {
        axios
            .get(
                `${VITE_API_URL_USER}/activities?username=${userStore.username}`
            )
            .then((res) => {
                setActivitiesState(res.data.data);
            });
        setUserDataState((pre) => ({
            ...userStore,
            timeFormatted: timeDetails(userStore.createdAt),
        }));
        console.log('userStore', userDataState);
        
    }, [userStore]);

    React.useEffect(() => {}, []);

    return (
        <>
            <Profile userData={userDataState} activities={activitiesState} />
        </>
    );
};

export default UserProfilePage;
