import styled from "styled-components";

const BoardStyles = styled.div`
    flex-grow: 1;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    max-height: 75vh;
    .Controls {
        height: 15vh;
        position: fixed;
        bottom: 0;
        width: 100%;
    }
`;

export default BoardStyles;
