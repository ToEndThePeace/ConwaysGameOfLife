import React from "react";
import { connect } from "react-redux";

import Row from "./Row";
import GameStyles from "./GameStyles";

const Game = (props) => {
    const { main, scale } = props;
    return (
        <GameStyles className="Game" scale={scale}>
            {main.map((row, i) => {
                return <Row key={i} y={i} data={row} />;
            })}
        </GameStyles>
    );
};

export default connect(
    (state) => ({
        main: state.board,
        scale: state.game.boardZoom,
    }),
    {}
)(Game);
