import styled from 'styled-components';

export const HeaderStyle = styled.div`
    width: 100%;
    background-color: var(--color-background-1);
    transition: background var(--transition-time-default);
    border-bottom: 1px solid var(--border-color);
    .wrapper {
        display: flex;
        justify-content: space-between;
        height: 56px;
        width: 100%;
        margin: 0 auto;
        position: relative;
        padding:0 10px;
        max-width: var(--max-width-site);
        .left {
            width: 40%;
            display: flex;
            position: relative;
            align-items: center;
            .logo {
                height: 40px;
            }
            .search {
                align-items: center;
                position: relative;
                width: 100%;
                input {
                    padding: 10px;
                    width: 80%;
                    background-color: var(--color-background-2);
                    transition: background var(--transition-time-default);
                }
                svg {
                    width: 35px;
                    height: 35px;
                    padding: 5px;
                    position: absolute;
                    right: calc(20% - 5px);
                    border-radius: 100%;
                }
            }
            .nav-search {
                padding: 5px 8px;
                font-size: 16px;
                line-height: 24px;
                margin: 0 10px;
                height: 40px;
            }
        }

        .right {
            display: flex;
            justify-content:center;
            align-items: center;
            .nav-icon {
                display: flex;
                justify-content:center;
                align-items: center;
                padding: 7px;
                width: 40px;
                height: 40px;
                margin: 0 5px;
            }
            .avatar-relative {
                position: relative;
                overflow: hidden;
                height: 40px;
                & .avatar{
                    margin-right: 0;
                }
            }
            .avatar-relative:hover {
                overflow: visible;
                transition: all 0.3s;
            }
            .avatar-relative:hover > .user-popup {
                opacity: 100%;
                transition: all 0.3s;
            }
            .user-popup {
                position: absolute;
                right: 0;
                top: 50px;
                width: 230px;
                border: 2px solid var(--border-color);
                border-radius: var(--border-radius);
                background-color: var(--color-background-1);
                text-align: left;
                box-shadow: 3px 3px var(--border-color);
                opacity: 0;
                transition: all 0.3s;
                z-index: 999;
            }

            .user-popup::before {
                content: "";
                padding: 20px 30px;
                position: absolute;
                right: -10px;
                top: -20px;
            }
            .darkmode {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .switch {
                border: 1px solid var(--border-color);
                position: relative;
                cursor: pointer;
                width: 60px;
                height: 30px;
                display: block;
                margin: 0 auto;
                overflow: hidden;
                box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
                border-radius: 50px;
                transition: background-color 0.25s linear;
                background-color: var(--color-background-2);
            }
            .switch:after {
                content: "";
                position: absolute;
                width: 20px;
                height: 20px;
                border-radius: 20px;
                background-color: #333;
                top: 4px;
                left: 5px;
                transition: background-color 0.25s linear,
                    transform 0.25s linear;
            }
            .switch-input {
                display: none;
            }
            .switch-input:checked + .switch {
                background-color: #333;
            }
            .switch-input:checked + .switch:after {
                transform: translateX(30px);
                background-color: white;
            }
        }
        .bdb-2 {
            border-bottom: 1px solid rgba(90, 90, 90, 0.144);
        }
    }
`