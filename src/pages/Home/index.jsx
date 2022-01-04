import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import {
    Home2,
    Save2,
    Video,
    Tag,
    MessageProgramming,
    Hashtag,
} from "iconsax-react";

import PostPreview from "../../components/PostPreview";
import Slider from "../../components/SliderBar";

import { getListPostRequest } from "./../../action/post";

import CardContent from "../../components/CardContent";
import NavigationItem from "../../components/NavigationItem";

// import "./style.scss";

import { HomePageStyles } from "./styles";
const Navigation = [
    {
        icon: <Home2 size="25" color="currentColor" />,
        content: "Trang chủ",
    },
    {
        icon: <Save2 size="25" color="currentColor" />,
        content: "Danh sách đã lưu",
    },
    {
        icon: <Video size="25" color="currentColor" />,
        content: "Video",
    },
    {
        icon: <Tag size="25" color="currentColor" />,
        content: "Tag",
    },
    {
        icon: <MessageProgramming size="25" color="currentColor" />,
        content: "Về tôi",
    },
];

const MyTag = [
    {
        icon: <Hashtag size="20" color="currentColor" />,
        content: "javaScript",
    },
    {
        icon: <Hashtag size="20" color="currentColor" />,
        content: "Nodejs",
    },
    {
        icon: <Hashtag size="20" color="currentColor" />,
        content: "electron",
    },
    {
        icon: <Hashtag size="20" color="currentColor" />,
        content: "python",
    },
    {
        icon: <Hashtag size="20" color="currentColor" />,
        content: "machinelearning",
    },
];

const HomePage = () => {
    const listPostStore = useSelector((store) => store.post);
    const dispatch = useDispatch();

    const [listPostState, setListPostState] = React.useState([]);

    React.useEffect(() => {
        dispatch(getListPostRequest());
    }, []);

    React.useEffect(() => {
        setListPostState(listPostStore);
    }, [listPostStore]);

    return (
        <HomePageStyles>
            <div className="sidebar-left mgt-20 mgr-15">
                <div className="main-navigation">
                    {Navigation.map((item, index) => (
                        <NavigationItem
                            key={index}
                            icon={item.icon}
                            content={item.content}
                        />
                    ))}
                </div>
                <div className="mytag">
                    <h3 className="mg-10 mgt-20">Tag quan tâm</h3>
                    {MyTag.map((item, index) => (
                        <NavigationItem
                            key={index}
                            icon={item.icon}
                            content={item.content}
                        />
                    ))}
                </div>
            </div>
            <div className="homepage df fd-c align-c">
                <Slider
                    title={"Bài viết"}
                    data={["Bảng tin", "Mới nhất", "Khám phá"]}
                />
                {listPostState.length ? (
                    listPostState.map((post, index) => {
                        return <PostPreview key={index} data={post} />;
                    })
                ) : (
                    <>
                        <PostPreview />
                        <PostPreview />
                        <PostPreview />
                    </>
                )}
            </div>
            <div className="sidebar-right">
                <div className="notification mgb-15">
                    <h3 className="pdb-5">Lorem ipsum dolor sit amet</h3>
                    <p className="pdb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos doloribus esse voluptates rerum
                    </p>
                    <h4 className="pdb-5">Lorem ipsum dolor sit amet</h4>
                </div>
                <CardContent title={"#new"} />
                <CardContent title={"#new"} />
                <CardContent title={"#new"} />
                <div className="stories"></div>
                <div className="news"></div>
                <div className="challenge"></div>
            </div>
        </HomePageStyles>
    );
};

HomePage.propTypes = {
    listPost: PropTypes.array,
    getListPost: PropTypes.func,
};

export default HomePage;
