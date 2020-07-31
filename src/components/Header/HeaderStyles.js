import styled from "styled-components";

const HeaderStyles = styled.header`
    min-height: 10vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: "Roboto", sans-serif;
    h1 {
        font-size: 1.8rem;
        margin-bottom: 1vh;
        font-weight: 700;
        @media screen and (max-width: 400px) {
            font-size: 1.4rem;
        }
    }
    nav {
        a {
            font-size: 0.75rem;
            color: white;
            margin-left: 2vw;
            text-decoration: none;
            border-bottom: 1px solid black;
            padding: 0 .5vw;
            &:not(:first-child) {
                padding: none;
            }
            &.active {
                border-color: #281;
            }
        }
    }
`;

export default HeaderStyles;
