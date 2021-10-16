import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import Header from "../../components/Header";
import PostPreview from "../../components/PostPreview";
import Slider from "../../components/Slider";

import { getListPostRequest } from "./../../action/post";
import { NavigationItem } from "../../components/NavigationItem";

import "./style.scss";
import { CardContent } from "../../components/CardContent";
function Home(props) {
    const { listPost, getListPost } = props;
    const [listPostState, setListPostState] = React.useState([]);

    React.useEffect(() => {
        getListPost();
    }, []);
    React.useEffect(() => {
        setListPostState(listPost);
    }, [listPost]);

    return (
        <div className="home-wrapper">
            <div className="sidebar-left mgt-20 mgr-10">
                <div className="main-navigation">
                    <NavigationItem
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 icon-color icon-md mgr-10"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                            </svg>
                        }
                        content={"Trang chủ"}
                    />
                    <NavigationItem
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 icon-color icon-md mgr-10"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                                />
                            </svg>
                        }
                        content={"Danh sách đã lưu"}
                    />
                    <NavigationItem
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 icon-color icon-md mgr-10"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                />
                            </svg>
                        }
                        content={"Video"}
                    />
                    <NavigationItem
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 icon-color icon-md mgr-10"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                                />
                            </svg>
                        }
                        content={"Tags"}
                    />
                    <NavigationItem
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 icon-color icon-md mgr-10"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        }
                        content={"Về tôi"}
                    />
                </div>
                <div className="mytag">
                    <h3 className="mg-10 mgt-20">Tag quan tâm</h3>
                    <NavigationItem content={"#javaScript"} />
                    <NavigationItem content={"#Nodejs"} />
                    <NavigationItem content={"#electron"} />
                    <NavigationItem content={"#python"} />
                    <NavigationItem content={"#machinelearning"} />
                </div>
            </div>
            <div className="homepage df fd-c align-c">
                <Slider
                    title={"Bài viết"}
                    data={[
                        "Bảng tin",
                        "Mới nhất",
                        "Khám phá",
                    ]}
                />
                {/* <Skeleton width={300} height={300} count={5}/>
                <Skeleton width={300} height={300} count={5}/>
                <Skeleton width={300} height={300} count={5}/>
                <Skeleton width={300} height={300} count={5}/> */}
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
                <div className="notification">
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
        </div>
    );
}

Home.propTypes = {
    listPost: PropTypes.array,
    getListPost: PropTypes.func,
};

const mapStateToProps = (state) => {
    return {
        listPost: state.post,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getListPost: () => {
            dispatch(getListPostRequest());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
