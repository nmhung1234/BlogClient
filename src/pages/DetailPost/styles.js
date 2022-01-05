import styled from "styled-components";

export const DetailPostPageStyles = styled.div`
/* @include flexbox("center", "start"); */
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 0 auto;
    width: 100%;
    padding: 0 10px;
    margin-top: 15px;
    .detail-post {
        width: 70%;
        align-items: center;
        flex-direction: column;
        flex: 1;
    }
    .author-info {
        width: 30%;
        height: min-content;
        margin-left: 15px;
        
        .short-profile {
            position: relative;
            overflow: hidden;
            background-color: var(--color-background-1);
            transition: background var(--transition-time-default);
            .bubble {
                height: 40px;
                width: 100%;
                background-color: rgb(18, 12, 43);
                margin-bottom: 60px;
            }
            .info {
                position: absolute;
                /* @include flexbox("null", "flex-end"); */
                display: flex;
                align-items: flex-end;
                top: 15px;
                img {
                    /* @include avatar(60px); */
                    width: 60px;
                    height: 60px;
                    min-width: 60px;
                    min-height: 60px;
                    border-radius: 60px;
                    margin: 0 10px;
                    object-fit: cover;
                }
            }
            .description {
                /* @include text-truncate(2); */
                display:-webkit-box;
                -webkit-line-clamp:2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                word-break: break-word;
            }
        }
    }
`