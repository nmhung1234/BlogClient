import styled from 'styled-components';

export const CommentStyle = styled.div`
    width: 100%;
    background-color: var(--color-background-1);
    transition: background var(--transition-time-default);
    overflow: hidden;
    border-radius: 0 0 5px 5px;
    border-top: none;
    padding: 50px;
    .write-comment {
        width: 100%;
        .right {
            width: 100%;
            /* @extend .write-comment; */
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            .area-comment {
                width: 80%;
                max-width: 80%;
                min-height: 70px;
                max-height: 200px;
                background-color: var(--color-background-2);
            }
            .upComment {
                width: min-content;
            }
            &-wrapper {
                height: fit-content;
            }
        }
    }
    .guest-comment-content {
        /* font-size: 18px;
        line-height: 27px; */
        text-align: left;
        font-family: "SegoeUI", Tahoma, Geneva, Verdana, sans-serif;
    }
    .guest-comment {
        position: relative;
        .action {
            box-sizing: border-box;
            position: absolute;
            top: 25px;
            right: 10px;
        }
    }
`