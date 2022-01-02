import styled from "styled-components";

export const PostDetailStyles = styled.div`
    width: 100%;
    background-color: var(--color-background-1);
    transition: background var(--transition-time-default);
    overflow: hidden;
    border-radius: 5px 5px 0 0;
    .img-post {
        width: 100%;
        height: 300px;
        object-fit: cover;
    }
    .body {
        padding: 32px 64px;
        text-align: left;
        .title {
            font-size: 48px;
        }
        .content {
            margin-top: 32px;
            /* .wmde-markdown {
            font-size: 2rem !important;
            line-height: 3rem !important;
            p {
                font-size: 2rem !important;
                line-height: 3rem !important;
            } */
            img {
                margin: 20px 0;
            }
        /* } */
        }
    }
    .authorInfo {
        display: flex;
        flex-direction: column;
        .time {
            font-weight: 200;
            font-size: 12px;
            line-height:18px;
        }
    }
`;