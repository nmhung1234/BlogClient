import styled from "styled-components";

export const ProfileStyles = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    .container {
        display: flex;
        align-items: center;
        width: 100%;
        .profile-wrapper{
            width: calc(100vw - var(--scrollbar-width));
            padding-top: 100px;
            background: linear-gradient(180deg, #000 40%, transparent 3rem);
            & .short-info {
                width: 100%;
                margin: 0 auto;
                max-width: var(--max-width-content);
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
        }
        & > .body {
            width: 150%;
            max-width: var(--max-width-content);
            display: flex;
            justify-content: center;
            /* overflow: hidden; */
            .count-activity {
                width: 100%;
                flex: 1;
                text-align: left;
                white-space: nowrap;
                height: min-content;
                background-color: var(--color-background-1);
                transition: background var(--transition-time-default);
                .activity {
                    display: flex;
                    align-items: center;
                    padding: 10px;
                }
            }
            .post-list {
                width: 100%;
                /* width: min-content; */
                flex: 3;
            }
        }
    }
    .edit-btn {
        position: absolute;
        top: 10px;
        right: 10px;
    }
    
`