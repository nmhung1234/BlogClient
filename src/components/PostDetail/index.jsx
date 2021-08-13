import React from "react";
import PropTypes from "prop-types";
import Tag from "../Tag";
import "./style.css";

function PostDetail(props) {
    return (
        <>
            <div className="PostDetail bd-primary">
                <img
                    className="img-post"
                    src="https://picsum.photos/800/600"
                    alt=""
                />
                <div className="body">
                    <div className="title pdb-20">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Adipisci, praesentium.
                    </div>
                    <Tag />
                    <Tag />
                    <Tag />
                    <Tag />
                    <div className="authorInfo pdt-20 pdb-20 df align-c">
                        <div className="df align-c">
                            <div className="avatar mgl-0"></div>
                            <h4 className="name mgl-5">Author Name</h4>
                        </div>
                        <div className="time pdl-20" style={{color: "var(--color-text-gray)"}}>12 thg 8</div>
                    </div>
                    <div className="content">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Voluptas officiis ullam non delectus eveniet fuga,
                        repellendus consequuntur cumque recusandae porro
                        explicabo, perferendis iure voluptatibus hic, beatae
                        temporibus quisquam autem? Eum quos ipsa explicabo
                        debitis non saepe est odio magni labore dicta! Illo
                        sequi voluptatum doloribus ex, deserunt nihil
                        reiciendis, officiis quam hic sint, omnis praesentium
                        unde voluptate molestiae dolorum exercitationem numquam
                        soluta iusto nam inventore fugiat! Consequatur sed,
                        minima excepturi sequi accusamus delectus architecto
                        aperiam. Id adipisci suscipit, aspernatur a delectus,
                        deleniti in ad nostrum ut nemo sint amet modi harum.
                        Officiis suscipit quis unde, sapiente saepe asperiores
                        reiciendis in. Laboriosam beatae deleniti distinctio
                        porro eaque neque quaerat modi perferendis optio
                        reiciendis. Alias veniam quam magnam iste vel officia
                        possimus perferendis eius aut fugiat pariatur at id
                        doloremque voluptatem earum, laborum facere harum quas.
                        Aliquid accusamus officia odit? Culpa fugiat odit
                        quibusdam velit corrupti. Adipisci, quasi similique
                        distinctio itaque quae saepe quisquam culpa mollitia
                        facere fugit molestiae ad quibusdam ipsa est
                        consequuntur beatae labore deleniti autem iusto corrupti
                        sint molestias. Ipsa unde, earum, magni officiis odit
                        architecto laboriosam quidem ex dolores hic asperiores
                        cumque non iste tenetur ut necessitatibus voluptate quo
                        vel vitae, iusto possimus fugit ratione enim! Atque,
                        repellat?
                    </div>
                    <div className="discussion"></div>
                </div>
            </div>
        </>
    );
}

PostDetail.propTypes = {};

export default PostDetail;
