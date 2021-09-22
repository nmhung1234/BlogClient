import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import Header from "../../components/Header";
import PostPreview from "../../components/PostPreview";
import "./style.scss";

import { getListPostRequest } from "./../../action/post";
import Slider from "../../components/Slider";
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
        <div>
            {/* <Header /> */}
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
                        return (
                            <PostPreview key={index} data={post} />
                        );
                    })
                ) : (
                    <>
                        <PostPreview />
                        <PostPreview />
                        <PostPreview />
                    </>
                )}
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
