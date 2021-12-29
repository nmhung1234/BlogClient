import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const NotFound = (props) => {
    return (
        <>
            <Player
                src="https://assets9.lottiefiles.com/packages/lf20_nucheY.json"
                background="transparent"
                speed="1"
                style={{width: "300px", height: "300px"}}
                loop
                autoplay
            ></Player>
        </>
    );
};

export default NotFound;
