import styled from '@emotion/styled';

export const NavContainer = styled.section`
    max-width: 100%;
    padding: 6rem;

    & .onToken {
        display: flex;
        gap: 3rem;
        justify-content: center;

        & li {
            & button[type='button'] {
                border: none;
                color: red;
                background-color: inherit;
                font-size: 3rem;
                cursor: pointer;
            }

            & a {
                font-size: 3rem;
            }
        }
    }

    & .noneToken {
        display: flex;
        gap: 3rem;
        justify-content: center;
        & li {
            & a {
                font-size: 3rem;
            }
        }
    }
`;
