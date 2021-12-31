import styled from "styled-components";

export const PostDetailStyles = styled.div`
    width: 100%;
    background-color: var(--color-background-1);
    overflow: hidden;
    border-radius: 5px 5px 0 0;
    .img-post {
        width: 100%;
        height: 300px;
        object-fit: cover;
    }
    .body {
        padding: 50px 70px;
        text-align: left;
        .title {
            font-size: 48px;
            line-height: 60px;
            font-weight: bold;
        }
        .content .wmde-markdown {
            font-size: 20px !important;
            line-height: 30px !important;
            img {
                margin: 20px 0;
            }
        }
    }
    .authorInfo .time {
        font-weight: 200;
    }
`;