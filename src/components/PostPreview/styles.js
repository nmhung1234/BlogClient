import styled from "styled-components";

export const PostDetailStyles = styled.div`
    width: 100%;
    min-width: 270px;
    max-width: 1000px;
    flex-wrap: wrap;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    background-color: var(--color-background-1);
    transition: background var(--transition-time-default);
    .infoAuthor {
        text-align: left;
        .right {
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            p:first-child {
                font-size: 14px;
                line-height: 17.5px;
            }
            p:last-child {
                font-size: 12px;
                font-weight: 300;
                line-height: 15px;
            }
        }
    }
    & .body {
        text-align: left;
        flex-direction: column;
        display: flex;
        align-items: flex-start;
        margin-left: 70px;
        h1 {
            text-align: left;
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
            font-size: 14px;
        }
    }
`;