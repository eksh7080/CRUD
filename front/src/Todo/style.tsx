import styled from '@emotion/styled';

export const Container = styled.section`
    max-width: 128rem;
    margin: 0 auto;
`;

export const TodoWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    & article {
        & h1 {
            font-size: 3rem;
            padding-top: 3rem;
        }

        & ul {
            & li {
                & input[type='text'] {
                    border: 1px solid skyblue;
                    border-radius: 0.4rem;
                    padding: 2rem;
                }

                & button[type='button'] {
                    border: 1px solid skyblue;
                    background-color: inherit;
                    padding: 2rem;

                    &:hover {
                        cursor: pointer;
                        color: red;
                    }
                }
            }
        }

        & div {
            overflow: scroll;
            max-height: 400px;

            & dl {
                position: relative;
                font-size: 2rem;
                line-height: 1.2;
                padding: 1rem 0;
                margin-top: 1rem;
                border-bottom: 1px solid #e2e2e2;

                & dt {
                    font-weight: 600;
                }

                & dd:last-of-type {
                    position: absolute;
                    right: 2rem;
                    top: 1rem;

                    & label {
                        & button[type='button']:first-of-type {
                            margin-left: 0;
                        }

                        & button[type='button'] {
                            border: 1px solid skyblue;
                            background-color: transparent;
                            padding: 1rem;
                            margin-left: 0.4rem;
                            font-size: 1.4rem;

                            &:hover {
                                cursor: pointer;
                            }
                        }
                    }
                }

                & .updateForm {
                    & input[type='text'] {
                        border: 1px solid skyblue;
                        border-radius: 0.4rem;
                        padding: 1rem 0;
                        text-indent: 1rem;
                        margin-right: 0.6rem;
                    }

                    & input[type='text']:last-of-type {
                        margin-right: 0;
                    }
                }
            }
        }
    }
`;
