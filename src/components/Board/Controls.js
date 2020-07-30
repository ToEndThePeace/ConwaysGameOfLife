import React from "react";
import ControlStyles from "./ControlStyles";
import { connect } from "react-redux";
import {
    setBoardZoom,
    resetBoardZoom,
    togglePause,
    resetBoardState,
    nextGen,
} from "../../store/actions";

const Controls = ({
    scale,
    isPlaying,
    setZoom,
    resetZoom,
    pauseButton,
    resetBoard,
    generateNext,
}) => {
    const sliderHandler = (e) => {
        const { value } = e.target;
        setZoom(value);
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
                <button onClick={pauseButton}>
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
        </ControlStyles>
    );
};

export default connect(
    (state) => ({
        scale: state.game.boardZoom,
        isPlaying: state.game.isPlaying,
    }),
    (dispatch) => ({
        setZoom: (scale) => dispatch(setBoardZoom(scale)),
        resetZoom: () => dispatch(resetBoardZoom()),
        pauseButton: () => dispatch(togglePause()),
        resetBoard: () => dispatch(resetBoardState()),
        generateNext: () => dispatch(nextGen()),
    })
)(Controls);
