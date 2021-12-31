import styled from "styled-components";

export const HomePageStyles = styled.div`
/* @include flexbox("center", ""); */
display: flex;
justify-content: center;
    width: 100%;
    margin: 0 auto;
    .sidebar-left {
        width: 20%;
        max-width: 250px;
        & .mytag h3 {
            /* @include flexbox("flex-start", "center"); */
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
    }
    .homepage {
        width: 60%;
    }
    .sidebar-right {
        width: 20%;
        max-width: 300px;
        margin: 15px 10px 15px 15px;
        .notification {
            width: 100%;
            border-radius: var(--border-radius);
            background-color: var(--color-background-1);
            padding: 20px;
            border: 1px solid var(--border-color);
            // margin: 15px;
        }
    }
`;