import styled from '@emotion/styled';

export const Container = styled.section`
    display: flex;
    flex-direction: row;
    max-width: 128rem;
    min-height: 100vh;
`;

export const LoginSection = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;

    .block {
        display: block;
        color: red;
        font-size: 1.4rem;
        text-align: start;
    }

    .none {
        display: none;
    }

    & form {
        text-align: center;
        transform: translateY(30vh);
        max-width: 46rem;
        width: 100%;
        height: 50%;

        @media all and (max-width: 960px) {
            text-align: center;
            transform: unset;
            transform: translateY(4vh);
        }

        & p {
            display: flex;
            justify-content: center;
            padding: 0px 3rem;

            & a {
                width: 200px;

                & img {
                    width: 200px;
                }
            }
        }

        & .loginWrap {
            display: flex;
            flex-direction: column;
            gap: 2rem;

            & h1 {
                text-align: center;
                font-weight: bold;
                font-size: 4rem;
                padding-bottom: 1rem;
                font-family: 'Viga', sans-serif;
            }

            & input {
                padding: 1.6rem 2rem;
                border: 1px solid #c9cacc;
                border-radius: 0.4rem;
                font-size: 1.4rem;
                line-height: 2.2rem;
                color: #7d7e80;
                width: calc(100% - 4rem);
            }

            & .util {
                display: flex;
                gap: 1rem;
                padding-left: 1rem;
                border-left: 1rem solid #e2e2e2;
                text-align: left;
                font-size: 1.2rem;
                font-weight: 400;

                & a {
                    &:hover {
                        font-weight: 600;
                        color: black;
                    }
                }
            }

            & article {
                & ul {
                    font-size: 1.4rem;
                    font-weight: 600;

                    & .loginBtn {
                        padding: 1.6rem 2rem;
                        border: 0;
                        background-color: #d3d3d3;
                        border-radius: 0.4rem;
                        font-size: 1.4rem;
                        line-height: 2.2rem;
                        width: 100%;
                        font-weight: 600;

                        &:hover {
                            cursor: pointer;
                            background-color: gray;
                        }
                    }
                }

                & .kakaoLogin {
                    margin-top: 1rem;
                    & li {
                        background-color: #fee500;
                        width: 100%;
                        font-size: 1.4rem;
                        font-weight: 600;
                        padding: 1.6rem 0;
                        border-radius: 1.2rem;

                        &:hover {
                            cursor: pointer;
                            background-color: yellow;
                        }

                        & span {
                            vertical-align: middle;
                        }

                        & button[type='button'] {
                            color: rgba(0, 0, 0, 0.85);
                            background: none;
                            border: 0;
                        }
                    }
                }
            }
        }
    }
`;
