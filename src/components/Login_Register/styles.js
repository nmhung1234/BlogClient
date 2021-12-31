import styled from 'styled-components';

export const LoginRegisterStyle = styled.div`
    ${props => {
            if (props.toggle == "hide") {
                return `display: none;`
            } else {
                return `
                    position: fixed;
                    z-index: 100;
                    width: 100vw;
                    height: calc(100vh + 10px);
                    top: 0px;
                    left: 0px;
                    background-color: rgba(0, 0, 0, 0.521);
                    backdrop-filter: blur(2px);
                `
            }
        }
    }
    .form {
        display: flex;
        justify-content: flex-start;
        .field {
            /* @include flexbox("null", "flex-start"); */
            display: flex;
            align-items: flex-start;
            flex-direction: column;
        }
    }
    .login,
    .register,
    .recovery {
        width: fit-content;
        padding: 0 50px 20px 50px;
    }
    input {
        line-height: 25px;
        padding: 7px 15px;
        width: 120%;
        /* font-size: 20px */
    }
    .login-dialog {
        /* @include flexbox("", "center"); */
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
        position: fixed;
        z-index: 200;
        width: fit-content;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: var(--color-background-1);
        transition: all 0.5s linear;
        .cancel-form {
            align-self: flex-start;
            &:hover {
                fill: bold;
            }
        }
    }
    
    .show {
        display: block;
    }
    .hide {
        display: none;
    } 
`