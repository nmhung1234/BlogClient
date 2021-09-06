import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Header from "../../components/Header";
import PostPreview from "../../components/PostPreview";
import "./style.css";

import { getListPostRequest } from "./../../action/post";
import Slider from "../../components/Slider";
import Skeleton from 'react-loading-skeleton';
function Home(props) {
    const { listPost, getListPost } = props;
    const [listPostState, setListPostState] = React.useState();

    React.useEffect(() => {
        getListPost();
    }, []);
    React.useEffect(() => {
        setListPostState(listPost);
    }, [listPost]);

    return (
        <div>
            <Header />
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
                {listPostState
                    ? listPostState.map((post, index) => {
                          return (
                              <PostPreview
                                  key={index}
                                  key2={index}
                                  data={post}
                              />
                          );
                      })
                    : <Skeleton count={5}/> }
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
