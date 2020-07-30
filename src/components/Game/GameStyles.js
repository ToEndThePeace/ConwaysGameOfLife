import styled from "styled-components";
import { readState } from "../../store";

const cellSize = () => {
    const { rows } = readState("game");
    const vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
    );
    const vh = Math.max(
        document.documentElement.clientHeight * 0.83 || 0,
        window.innerHeight * 0.83 || 0
    );
    if (vw > vh) {
        return `width: ${vw / rows};`;
    } else {
        return `width: ${(vh / rows) * 0.83};`;
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
        return `width: ${vw}vw;`;
    } else {
        return `width: ${vh * 0.83}vh;`;
    }
};
const dimensions = (flag) => {
    const { rows, cols } = readState("game");
    switch (flag) {
        case "height":
            return (cols / rows) * 100;
        case "max-width":
            return (rows / cols) * 100 * 0.83;
        default:
            return 50;
    }
};

const GameStyles = styled.div`
    display: flex;
    flex-flow: column nowrap;
    transform-origin: center;
    -moz-transform-origin: center;
    -webkit-transform-origin: center;
    transform: scale(${(props) => props.scale}, ${(props) => props.scale});
    width: 100vw;
    height: ${dimensions("height")}vw;
    max-height: 83vh;
    max-width: ${dimensions("max-width")}vh;
    .Row {
        display: flex;
        flex-flow: row nowrap;
        ${rowSize()}
        .Cell {
            flex-grow: 1;
            border: 1px solid #111;
            overflow: hidden;
            ${cellSize()}
            &::before {
                content: "";
                display: block;
                padding-top: 100%;
            }
            &.dead {
                background: black;
            }
            &.alive {
                background: yellow;
            }
            &.clickable {
                cursor: pointer;
            }
        }
    }
`;

export default GameStyles;
