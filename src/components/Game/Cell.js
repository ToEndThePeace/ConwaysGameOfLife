import React from "react";
import { connect } from "react-redux";
import { clickCell } from "../../store/actions";

const Cell = (props) => {
    const {
        coords: [x, y],
        clickable,
        toggleCell,
    } = props;
    const cellClickHandler = (e) => {
        e.preventDefault();
        if (clickable) {
            toggleCell(x, y);
        }
    };
    return (
        <div
            className={`Cell ${props.status === false ? "dead" : "alive"}`}
            onClick={cellClickHandler}
        />
    );
};

export default connect(
    (state) => ({
        clickable: !state.game.isPlaying,
    }),
    (dispatch) => ({
        toggleCell: (x, y) => dispatch(clickCell(x, y)),
    })
)(Cell);
