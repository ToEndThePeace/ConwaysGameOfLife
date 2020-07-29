import styled from "styled-components";

const BoardStyles = styled.div`
    flex-grow: 1;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    max-height: 85vh;
    .Game {
        width: 100vmax;
    }
    .Controls {
        height: 7vh;
        position: fixed;
        bottom: 0;
        width: 100%;
    }
`;

export default BoardStyles;
