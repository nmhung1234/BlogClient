import React from "react";
import PropTypes from "prop-types";
import Tag from "../Tag";
import "./style.css";
import MDEditor from "@uiw/react-md-editor";

function PostDetail(props) {
    const { data } = props;
    return (
        <>
            <div className="PostDetail bd-primary">
                {data.cover ? (
                    <img className="img-post" src={data.cover} alt="" />
                ) : (
                    ""
                )}
                <div className="body">
                    <div className="title pdb-20">{data?.title}</div>
                    {data?.hastag.map((elem, index) => (
                        <Tag key={index} tag={elem} />
                    ))}
                    <div className="authorInfo pdt-20 pdb-20 df align-c">
                        <div className="df align-c">
                            <div className="avatar mgl-0"></div>
                            <h4 className="name mgl-5">Author Name</h4>
                        </div>
                        <div
                            className="time pdl-20"
                            style={{ color: "var(--color-text-gray)" }}
                        >
                            12 thg 8
                        </div>
                    </div>
                    <div className="content">
                        <MDEditor.Markdown source={data?.content} />
                    </div>
                    <div className="discussion"></div>
                </div>
            </div>
        </>
    );
}

PostDetail.propTypes = {
    data: PropTypes.shape({
        cover: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        hastag: PropTypes.array.isRequired,
    }),
};
PostDetail.defaultProps = {
    data: {
        cover: "https://picsum.photos/600/800",
        title: "Lorem Ipsum dolor sit amet",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, recusandae delectus! Reprehenderit aliquam repellat voluptatum magni, aliquid facilis? Adipisci porro corrupti fugit voluptate quaerat placeat. Mollitia natus, doloribus distinctio quia, illo a veniam sit, dolorem magnam est nam. Optio iste dolorum minus laborum porro delectus veniam. At officiis nostrum architecto!",
        hastag: ["#nodejs"],
    },
};

export default PostDetail;
