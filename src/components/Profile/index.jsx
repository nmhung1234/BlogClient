import React from "react";
import "./style.css";
import PropTypes from "prop-types";
import birthIcon from "./../../assets/icons/activity.svg";
function Profile(props) {
    return (
        <>
            <div className="user-profile">
                <div className="bg"></div>
                <div className="container df justify-c">
                    <div className="profile bd-primary bd-radius-5 df justify-c">
                        <div className="user-avatar df justify-c align-c">
                            <img src="https://picsum.photos/200" alt="" />
                        </div>
                        <div className="edit-btn button-lg mg-10">
                            Chỉnh sửa
                        </div>
                        <div className="describe df fd-c">
                            <h1 className="name mg-20">Nguyen Hung</h1>
                            <p className="description mgb-10">
                                Long time no see
                            </p>
                            <div className="birth df">
                                <img src={birthIcon} alt="" />
                                <p className="mgl-10 color-gray">
                                    Đã tham gia ngày 3 tháng 8, 2021
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Profile.propTypes = {};

export default Profile;
