import styled from "styled-components";

export const SliderStyles = styled.div`
/* @include flexbox("space-between", "center"); */
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    user-select: none;
    .right {
        flex-direction: column;
        position: relative;
        p {
            padding: 10px;
            white-space: nowrap;
        }
        .slider {
            min-width: 40px;
            height: 3px;
            word-wrap: none;
            background-color: var(--color-primary);
            position: absolute;
            top: 51px;
            left: 20px;
            transition: all 0.3s ease-out;
        }
    }

    @media only screen and (max-width: 1200px) {
        .category {
            width: 60%;
            font-size: 14px;
        }
    }
    @media only screen and (max-width: 768px) {
        .category {
            width: 90%;
            font-size: 14px;
        }
    }
`;