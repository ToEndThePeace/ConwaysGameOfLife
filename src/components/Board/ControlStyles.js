import styled from "styled-components";

const ControlStyles = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-content: space-evenly;
    color: white;
    font-size: 0.75rem;
    font-family: "Roboto", sans-serif;

    & > label,
    div {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        width: 30%;
        &:not(:first-child):not(:nth-child(4)) {
            margin-left: 2.5%;
        }
        button:not(:first-of-type) {
            margin-left: 0.5vw;
        }
        input {
            width: 50%;
            font-family: "Roboto", sans-serif;
        }
        select, button {
            font-family: "Roboto", sans-serif;
        }
    }
`;

export default ControlStyles;
