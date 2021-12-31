import styled from "styled-components";

export const PostDetailStyles = styled.div`
    width: 100%;
    min-width: 270px;
    max-width: 1000px;
    flex-wrap: wrap;
    /* @include flexbox("flex-start", "null"); */
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    background-color: var(--color-background-1);
    box-sizing: content-box;
    .infoAuthor {
        text-align: left;
        .right {
            /* @include flexbox("space-around", "null"); */
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            p:first-child {
                font-size: 14px;
                line-height: 17.5px;
                /* font-weight: 500 */
            }
            p:last-child {
                font-size: 12px;
                font-weight: 300;
                line-height: 15px;
            }
        }
    }
    .body {
        text-align: left;
        flex-direction: column;
        /* @include flexbox("null", "flex-start"); */
        display: flex;
        align-items: flex-start;
        margin-left: 70px;
        h1 {
            text-align: left;
            /* @include text-truncate(2); */
            display:-webkit-box;
            -webkit-line-clamp:2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            word-break: break-word;
        }
    }
    .bottom {
        width: 100%;
        /* @include flexbox("space-between", "flex-end"); */
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        position: relative;
        .right {
            position: absolute;
            bottom: 0px;
            right: 0px;
        }
    }
    .reaction,
    .comment {
        align-items: center;
    }
    &:active {
    box-shadow: 0 0 0 2px var(--color-primary);
    }

    @media only screen and (max-width: 768px) {
        & {
            /* width: 90%; */
            font-size: 14px;
        }
    }
`;