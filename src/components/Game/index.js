import React from "react";
import { connect } from "react-redux";

import Row from "./Row";
import GameStyles from "./GameStyles";

const Game = (props) => {
    const { main, scale } = props;
    return (
        <GameStyles className="Game" scale={scale}>
            {main.map((row, i) => {
                return <Row key={i} data={row} />;
            })}
        </GameStyles>
    );
};

export default connect((state) => {
    return {
        main: state.game.main,
        scale: state.game.boardZoom,
    };
}, {})(Game);
