import React from "react";
import ControlStyles from "./ControlStyles";
import { connect } from "react-redux";
import {
    setBoardZoom,
    resetBoardZoom,
    resetBoardState,
    nextGen,
    togglePause,
    updateRows,
    updateCols,
    changeSpeed,
} from "../../store/actions";

const Controls = ({
    scale,
    isPlaying,
    genCount,
    timerId,
    cols,
    rows,
    speed,
    setZoom,
    resetZoom,
    resetBoard,
    generateNext,
    pauseButton,
    rowUpdate,
    colUpdate,
    speedUpdate,
}) => {
    const pauseToggleHandler = (e) => {
        if (isPlaying) {
            // set an interval
            clearInterval(timerId);
            pauseButton();
        } else {
            let interval = setInterval(generateNext, speed);
            pauseButton(interval);
        }
    };
    const zoomHandler = (e) => {
        const { value } = e.target;
        setZoom(value);
    };
    const speedHandler = (e) => {
        const { value } = e.target;
        speedUpdate(value * 10);
    };

    return (
        <ControlStyles className="Controls">
            {/* <label>
                Load Preset:
                <select defaultValue="">
                    <option value="" disabled hidden>
                        Choose Preset
                    </option>
                </select>
            </label> */}
            <label>
                Speed:
                <input
                    type="range"
                    value={speed / 10}
                    min="0"
                    max="40"
                    onChange={speedHandler}
                    style={{ direction: "rtl" }}
                    disabled={isPlaying ? true : false}
                />
            </label>
            <div>
                <button onClick={pauseToggleHandler}>
                    {isPlaying ? "Pause" : "Play"}
                </button>
                <button onClick={resetBoard}>Reset</button>
                <button onClick={generateNext}>Next</button>
            </div>
            <label>
                Zoom:{" "}
                <input
                    type="range"
                    value={scale * 100}
                    onChange={zoomHandler}
                    min="0"
                    max="200"
                />
                <button onClick={resetZoom}>Reset Zoom</button>
            </label>
            <div>Generation: {genCount}</div>
        </ControlStyles>
    );
};

export default connect(
    (state) => ({
        scale: state.game.boardZoom,
        isPlaying: state.game.isPlaying,
        genCount: state.genCount,
        timerId: state.game.timerId,
        cols: state.game.cols,
        rows: state.game.rows,
        speed: state.game.simSpeed,
    }),
    (dispatch) => ({
        setZoom: (scale) => dispatch(setBoardZoom(scale)),
        resetZoom: () => dispatch(resetBoardZoom()),
        resetBoard: () => dispatch(resetBoardState()),
        generateNext: () => dispatch(nextGen()),
        pauseButton: (timerId = null) => dispatch(togglePause(timerId)),
        rowUpdate: (rows) => dispatch(updateRows(rows)),
        colUpdate: (cols) => dispatch(updateCols(cols)),
        speedUpdate: (speed) => dispatch(changeSpeed(speed)),
    })
)(Controls);
