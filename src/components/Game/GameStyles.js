import styled from "styled-components";
import { readState } from "../../store";

const cellSize = () => {
    const { rows } = readState("game");
    const vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
    );
    const vh = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
    );
    if (vw > vh) {
        return `width: ${vw / rows};`;
    } else {
        return `width: ${vh / rows};`;
    }
};
const rowSize = () => {
    const vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
    );
    const vh = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
    );
    if (vw > vh) {
        return `width: ${vw};`;
    } else {
        return `width: ${vh};`;
    }
};

const GameStyles = styled.div`
    display: flex;
    flex-flow: column nowrap;
    transform-origin: center;
    -moz-transform-origin: center;
    -webkit-transform-origin: center;
    transform: scale(${(props) => props.scale}, ${(props) => props.scale});
    .Row {
        display: flex;
        flex-flow: row nowrap;
        ${rowSize()}
        .Cell {
            flex-grow: 1;
            border: 1px solid green;
            ${cellSize()}
            &::before {
                content: "";
                display: block;
                padding-top: 100%;
            }
            &.dead {
                background: none;
            }
            &.alive {
                background: yellow;
            }
        }
    }
`;

export default GameStyles;
