import styled from "styled-components";

export const ProfileStyles = styled.div`
    width: 100%;
    position: relative;
    .bg {
        height: 150px;
        background-color: #000;
        border-radius: 0 0 10px 10px;
    }
    .container {
        display: flex;
        align-items: center;
        width: 100%;
        position: absolute;
        top: 90px;
        .profile {
            width: 70%;
            height: fit-content;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            position: relative;
            background-color: var(--color-background-1);
            transition: background var(--transition-time-default);
            .user-avatar {
                display: flex;
                justify-content: center;
                align-items: center;
                box-sizing: border-box;
                height: var(--height-avatar);
                width: 150px;
                height: 150px;
                border-radius: 75px;
                background-color: black;
                overflow: hidden;
                margin: 0;
                position: absolute;
                top: -75px;
                img {
                    height: calc(var(--height-avatar) - var(--border-avatar));
                    object-fit: cover;
                    border-radius: inherit;
                }
            }
            .describe {
                display: flex;
                align-items: center;
                padding-top: 75px;
                .description {
                    font-size: 18px;
                    line-height: 27px;
                    max-width: 60%;
                    display:-webkit-box;
                    -webkit-line-clamp:3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    word-break: break-word;
                }
                .birth {
                    display: flex;
                    align-items: center;
                }
            }
        }
        .count-activity {
            width: min-content;
            text-align: left;
            white-space: nowrap;
            height: min-content;
            background-color: var(--color-background-1);
            transition: background var(--transition-time-default);
        }
        .action {
            width: 70%;
            display: flex;
            justify-content: center;
            .activity {
                display: flex;
                align-items: center;
                padding: 10px;
            }
        }
    }
    .edit-btn {
        position: absolute;
        top: 10px;
        right: 10px;
    }
    .post-list {
        width: 100%;
    }
`