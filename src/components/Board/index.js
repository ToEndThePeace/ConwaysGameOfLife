import React from "react";

import BoardStyles from "./BoardStyles";
import Game from "../Game";
import Controls from "./Controls";

const Board = (props) => {
    return (
        <BoardStyles>
            <Game />
            <Controls />
        </BoardStyles>
    );
};

export default Board;
