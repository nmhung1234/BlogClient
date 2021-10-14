import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import Header from "../../components/Header";
import PostPreview from "../../components/PostPreview";
import Slider from "../../components/Slider";

import { getListPostRequest } from "./../../action/post";
import { NavigationItem } from "../../components/NavigationItem";

import home from "./../../assets/icons/home.svg";
import readingList from "./../../assets/icons/bookmark.svg";
import video from "./../../assets/icons/video.svg";
import tag from "./../../assets/icons/tag.svg";
import info from "./../../assets/icons/info.svg";
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
                    <NavigationItem icon={home} content={"Trang chủ"} />
                    <NavigationItem
                        icon={readingList}
                        content={"Danh sách đã lưu"}
                    />
                    <NavigationItem icon={video} content={"Video"} />
                    <NavigationItem icon={tag} content={"Tags"} />
                    <NavigationItem icon={info} content={"Về tôi"} />
                </div>
                <div className="mytag">
                    <h3 className="mg-10 mgt-20">Tag quan tâm</h3>
                    <NavigationItem content={"#Trang chủ"} />
                    <NavigationItem content={"#Trang chủ"} />
                    <NavigationItem content={"#Trang chủ"} />
                    <NavigationItem content={"#Trang chủ"} />
                    <NavigationItem content={"#Trang chủ"} />
                </div>
            </div>
            <div className="homepage df fd-c align-c">
                <Slider
                    title={"Bài viết"}
                    data={[
                        "Bảng tin",
                        "Tuần",
                        "Tháng",
                        "Năm",
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
                <CardContent title={"#new"}/>
                <CardContent title={"#new"}/>
                <CardContent title={"#new"}/>
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
