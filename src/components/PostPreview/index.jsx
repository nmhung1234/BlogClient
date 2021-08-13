import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./style.css";
import commentIcon from "./../../assets/icons/message-circle.svg";
import likeIcon from "./../../assets/icons/heart.svg";
import { showTime } from "../../utils";
import Tag from "../Tag";

function PostPreview(props) {
    const { data, key2 } = props;

    function slug(str) {
        str = str.replace(/^\s+|\s+$/g, ""); // trim
        str = str.toLowerCase();

        // remove accents, swap ñ for n, etc
        var from = "àáäăâèéëêìíïîòóöôùúüûñç·/_,:;";
        var to = "aaaaeeeeiiiioooouuuunc------";
        for (var i = 0, l = from.length; i < l; i++) {
            str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
        }

        str = str
            .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
            .replace(/\s+/g, "-") // collapse whitespace and replace by -
            .replace(/-+/g, "-"); // collapse dashes

        return str;
    }
    return (
        <Link
            to={`${slug(data.ownerData.name)}/${slug(data.postData.title)}`}
            className="previrewPost df bd-primary bd-radius-5 mg-10"
        >
            {key2 == 0 ? (
                <div
                    style={{
                        width: "100%",
                        height: "200px",
                        borderRadius: "5px 5px 0 0",
                        backgroundImage: `url(${data.postData.titleImg})`,
                        backgroundSize: "cover",
                    }}
                ></div>
            ) : (
                ""
            )}

            <div className="infoAuthor mg-10 df">
                <div className="avatar"></div>
                <div className="right df">
                    <p>{data.ownerData.name}</p>
                    <p className="date">{showTime(data.postData.createdAt)}</p>
                </div>
            </div>
            <div className="body df mg-20 mgr-20">
                <h1 className=" mgb-10 cursor-pointer hover-primary">
                    {data.postData.title}
                </h1>
                <div>
                    {data.tags?.map((tag, index) => {
                        return <Tag key={index} tag={tag} />;
                    })}
                </div>
                <div className="bottom df mgt-10">
                    <div className="left df">
                        <div className="df hover-secondary-bg pd-10 bd-radius-5 cursor-pointer reaction ">
                            <img className="icon mgr-5" src={likeIcon} alt="" />
                            <p>3 reaction</p>
                        </div>
                        <div className="df hover-secondary-bg pd-10 bd-radius-5 cursor-pointer comment ">
                            <img
                                className="icon mgr-5"
                                src={commentIcon}
                                alt=""
                            />
                            <p>Add comment</p>
                        </div>
                    </div>
                    <div className="right">
                        <div className="button-sm">Save</div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

PostPreview.propTypes = {
    data: PropTypes.shape({
        ownerData: PropTypes.object.isRequired,
        postData: PropTypes.object.isRequired,
    }),
    key2: PropTypes.number.isRequired,
};

export default PostPreview;
