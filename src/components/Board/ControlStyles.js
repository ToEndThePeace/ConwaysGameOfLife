import styled from "styled-components";

const ControlStyles = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    color: white;
    font-size: 0.75rem;
    font-family: "Roboto", sans-serif;
    .container {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
        align-items: center;
        & > label,
        div {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: center;
            width: 30%;
            @media screen and (max-width: 400px) {
                width: unset;
            }
            &:not(:first-child):not(:nth-child(4)) {
                margin-left: 1vw;
            }
            button:not(:first-of-type) {
                margin-left: 0.5vw;
            }
            input {
                width: 50%;
                font-family: "Roboto", sans-serif;
                @media screen and (max-width: 400px) {
                    font-size: .7rem;
                }
            }
            select,
            button {
                font-family: "Roboto", sans-serif;
                @media screen and (max-width: 400px) {
                    font-size: .7rem;
                }
            }
        }
    }
`;

export default ControlStyles;
