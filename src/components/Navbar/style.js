import { styled } from "styled-components";

export const HeaderWrapper = styled.header`
    position: absolute;
    z-index: 100;
    width: 100%;
    background-color: #0f213380;
    transition: all 0.5s ease-out;
    padding-bottom: 20px;
    &.sticky {
        padding-bottom: 10px;
        background-color: #0f2133;
        position: fixed;
        width: 100%;
        z-index: 9999;
        opacity: 1;
        filter: alpha(opacity=100);
        top: 0;
        left: 0;
        transition: all 0.5s ease-out;
        .navbar {
            padding: 12px 0 !important;
            transition: all 0.5s ease-out;
        }
    }
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px 0;
        .navbar-header {
            img.logo {
                border: 0;
                height: auto;
                max-width: 100%;
                vertical-align: middle;
            }
        }
        .menu-btn {
            display: none;
            color: #fff;
            font-size: 24px;
            cursor: pointer;
            &:hover {
                color: #dcf836;
            }
        }
        .navbar-collapse {
            display: flex;
            flex: 1;
            padding-right: 15px;
            padding-left: 15px;
            transition: 0.3s ease;
            .navbar-nav {
                display: flex;
                margin-left: 30px;
                .nav-item {
                    a {
                        font-family: "Dosis", sans-serif;
                        padding: 15px;
                        font-size: 14px;
                        color: #abb7c4;
                        font-weight: bold;
                        text-transform: uppercase;
                        cursor: pointer;
                        &.active,
                        &:hover {
                            color: #dcf836;
                        }
                    }
                    &.dropdown {
                        position: relative;
                        &:hover .sub-nav {
                            visibility: visible;
                            opacity: 1;
                            color: #dcf836;
                        }
                        .sub-nav {
                            position: absolute;
                            top: 200%;
                            visibility: hidden;
                            opacity: 0;
                            background-color: #fff;
                            min-width: 180px;
                            padding-top: 20px;
                            padding-bottom: 20px;
                            left: -15px;
                            transition: 0.3s ease;
                            .sub-nav-item {
                                a {
                                    display: block;
                                    color: #000;
                                    padding: 10px 30px;
                                    color: #020d18;
                                    white-space: nowrap;
                                    &:hover {
                                        color: #dcf836;
                                    }
                                }
                            }
                        }
                    }
                }
                &.menu-right {
                    margin-left: auto;
                    display: flex;
                    align-items: center;
                    .account {
                        position: relative;

                        .user-link {
                            cursor: pointer;
                            font-size: 24px;
                            color: #fff;
                            &.active {
                                color: #dcf836;
                            }
                        }
                        &:hover .account-menu {
                            opacity: 1;
                            visibility: visible;
                        }
                        .account-menu {
                            opacity: 0;
                            visibility: hidden;
                            border-radius: 5px;
                            position: absolute;
                            left: 100%;
                            transform: translateX(-100%);
                            background: #fff;
                            width: 200px;
                            transition: 0.3s ease;
                            .account-item {
                                a {
                                    display: block;
                                    padding: 10px;
                                    font-family: "Dosis", sans-serif;
                                    font-size: 14px;
                                    color: #abb7c4;
                                    font-weight: bold;
                                    text-transform: uppercase;
                                    cursor: pointer;
                                    transition: 0.3s ease;
                                    &:hover {
                                        opacity: 0.8;
                                        background: #ccc;
                                        color: #dcf836;
                                    }
                                    &.active {
                                        color: #dcf836;
                                    }
                                }
                                &:first-child a {
                                    border-radius: 5px 5px 0 0;
                                }
                                &:last-child a {
                                    border-radius: 0 0 5px 5px;
                                }
                            }
                        }
                    }
                    .loginLink {
                        a {
                            padding: 15px;
                            font-family: "Dosis", sans-serif;
                            font-size: 14px;
                            color: #abb7c4;
                            font-weight: bold;
                            text-transform: uppercase;
                            cursor: pointer;
                            &:hover {
                                color: #dcf836;
                            }
                        }
                    }
                    .sign-upLink {
                        a {
                            font-family: "Dosis", sans-serif;
                            background-color: #dd003f;
                            color: #ffffff;
                            padding: 13px 20px;
                            border-radius: 20px;
                            font-size: 14px;
                            font-weight: bold;
                            text-transform: uppercase;
                            cursor: pointer;
                            line-height: 20px;
                            &:hover {
                                color: #dcf836;
                            }
                        }
                    }
                }
            }
        }
    }
    .top-search {
        display: flex;
        align-items: center;
        border: 3px solid #fff;
        border-radius: 3px;

        select,
        input {
            height: 46px;
            border: none;
            font-family: "Nunito", sans-serif;
            font-size: 18px;
            color: #fff;
            font-weight: 300;
            text-transform: none;
        }
        select {
            background: transparent;
            flex-basis: 20%;
            border-right: 1px solid #fff;
            text-transform: uppercase;
            color: #ffffff;
            outline: transparent;
            option {
                color: #aaa;
            }
        }
        input {
            padding-left: 10px;
            flex-basis: 81%;
            background: no-repeat right 20px center;
            outline: transparent;
        }
        button {
            cursor: pointer;
            height: 46px;
            font-family: "Nunito", sans-serif;
            font-size: 18px;
            color: #fff;
            background-color: transparent;
            /* border: transparent; */
        }
    }

    @media (max-width: 991.98px) {
        background-color: #0f2133;
        .navbar {
            position: relative;
            flex-direction: column;
            gap: 20px;
            .navbar-header {
                align-self: start;
                img.logo {
                    width: 80%;
                }
            }
            .menu-btn {
                display: block;
                right: 10px;
                top: 40px;
                position: absolute;
            }
            .navbar-collapse.hidden {
                display: none;
            }
            .navbar-collapse {
                display: block;
                flex-direction: column;
                width: 100%;
                .navbar-nav {
                    flex-direction: column;
                    margin: 0;
                    a {
                        display: flex;
                        justify-content: space-between;
                    }
                    .nav-item.dropdown {
                        .sub-nav {
                            width: 100%;
                            top: 0;
                            z-index: 100;
                            background-color: #0b1a2a;

                            .sub-nav-item {
                                a {
                                    color: #fff;
                                }
                                &:hover {
                                    background: #abb7c4;
                                }
                            }
                        }
                    }
                }
                .menu-right {
                    margin-top: 30px;
                    width: 100%;
                    li {
                        width: 100%;
                    }
                    .sign-upLink a {
                        display: flex;
                        justify-content: center;
                    }
                }
            }
        }
    }
    @media (max-width: 767.98px) {
        .top-search {
            display: none !important;
        }
        .navbar .navbar-header img.logo {
            width: 60%;
            margin-top: 5px;
        }
    }
`;
