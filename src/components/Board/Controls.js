import React from "react";
import ControlStyles from "./ControlStyles";
import { connect } from "react-redux";
import {
    setBoardZoom,
    resetBoardZoom,
    resetBoardState,
    nextGen,
    togglePause,
} from "../../store/actions";

const Controls = ({
    scale,
    isPlaying,
    genCount,
    timerId,
    setZoom,
    resetZoom,
    resetBoard,
    generateNext,
    pauseButton,
}) => {
    const sliderHandler = (e) => {
        const { value } = e.target;
        setZoom(value);
    };
    const pauseToggleHandler = (e) => {
        if (isPlaying) {
            // set an interval
            clearInterval(timerId);
            pauseButton();
        } else {
            let interval = setInterval(generateNext, 200);
            pauseButton(interval);
        }
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
                    onChange={sliderHandler}
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
    }),
    (dispatch) => ({
        setZoom: (scale) => dispatch(setBoardZoom(scale)),
        resetZoom: () => dispatch(resetBoardZoom()),
        resetBoard: () => dispatch(resetBoardState()),
        generateNext: () => dispatch(nextGen()),
        pauseButton: (timerId = null) => dispatch(togglePause(timerId)),
    })
)(Controls);
