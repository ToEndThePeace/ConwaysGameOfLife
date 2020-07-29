import styled from "styled-components";

const ControlStyles = styled.div`
    background: #999;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    label {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        &:not(:first-child) {
            margin-left: 2.5%;
        }
        button:not(:first-of-type) {
            margin-left: .5vw;
        }
    }
`;

export default ControlStyles;
