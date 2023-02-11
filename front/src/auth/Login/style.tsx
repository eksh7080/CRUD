import styled from '@emotion/styled';

export const Container = styled.section`
    display: flex;
    max-width: 128rem;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
}
`;

export const LoginSection = styled.div`
    width: 100%;
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
        max-width: 46rem;
        width: 100%;

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

                    & li {
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

                        & .googleLogin {
                            margin-top: 1rem;
                            padding: 1.6rem 2rem;
                            background-color: #fff;
                            width: 100%;
                            font-size: 2.4rem;
                            border: 1px solid transparent;
                            font-weight: 600;
                            box-shadow: 0 2px 1px 0 rgba(155, 155, 155, 0.5);

                            & span {
                                margin-right: 1rem;
                                & img {
                                    width: 24px;
                                    height: 24px;
                                    vertical-align: middle;
                                }
                            }

                            &:hover {
                                cursor: pointer;
                                background-color: #4285f4;
                            }
                        }
                    }
                }
            }
        }
    }
`;
