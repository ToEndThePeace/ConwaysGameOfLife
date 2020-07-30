import React from "react";
import ControlStyles from "./ControlStyles";
import { connect } from "react-redux";
import { setBoardZoom, resetBoardZoom, togglePause } from "../../store/actions";

const Controls = (props) => {
    const { scale, isPlaying, setZoom, resetZoom, pauseButton } = props;

    const sliderHandler = (e) => {
        const { value } = e.target;
        setZoom(value);
    };
    const resetZoomHandler = (e) => {
        e.preventDefault();
        resetZoom();
    };

    return (
        <ControlStyles className="Controls">
            <label>
                Load Preset:
                <select defaultValue="">
                    <option value="" disabled hidden>
                        Choose Preset
                    </option>
                </select>
            </label>
            <div>
                <button>Prev</button>
                <button onClick={pauseButton}>
                    {isPlaying ? "Pause" : "Play"}
                </button>
                <button>Reset</button>
                <button>Next</button>
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
                <button onClick={resetZoomHandler}>Reset Zoom</button>
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
    })
)(Controls);
