import React from "react";
import ControlStyles from "./ControlStyles";
import { connect } from "react-redux";
import {
    setBoardZoom,
    resetBoardZoom,
    resetBoardState,
    nextGen,
    togglePause,
    changeSpeed,
    randomize,
} from "../../store/actions";

const Controls = ({
    scale,
    isPlaying,
    genCount,
    timerId,
    speed,
    setZoom,
    resetZoom,
    resetBoard,
    generateNext,
    pauseButton,
    speedUpdate,
    randomizeBoard,
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
        speedUpdate(value);
    };
    const resetSpeed = (e) => {
        speedUpdate(200);
    };

    return (
        <ControlStyles className="Controls">
            <div>
                <button onClick={pauseToggleHandler}>
                    {isPlaying ? "Pause" : "Play"}
                </button>
                <button
                    onClick={resetBoard}
                    disabled={isPlaying ? true : false}
                >
                    Reset
                </button>
                <button
                    onClick={generateNext}
                    disabled={isPlaying ? true : false}
                >
                    Next
                </button>
            </div>
            <div>Generation:&nbsp;{genCount}</div>
            <label>
                <select defaultValue="" disabled={isPlaying ? true : false}>
                    <option value="" disabled hidden>
                        Choose Preset
                    </option>
                </select>
            </label>
            <label>
                Zoom:&nbsp;
                <input
                    type="range"
                    value={scale * 100}
                    onChange={zoomHandler}
                    min="0"
                    max="200"
                />
                &nbsp;
                <button onClick={resetZoom}>Fit</button>
            </label>
            <label>
                <button
                    onClick={randomizeBoard}
                    disabled={isPlaying ? true : false}
                >
                    Randomize
                </button>
            </label>
            <label>
                Speed:&nbsp;
                <input
                    type="range"
                    value={speed}
                    min="0"
                    max="400"
                    onChange={speedHandler}
                    style={{ direction: "rtl" }}
                    disabled={isPlaying ? true : false}
                />
                &nbsp;
                <button
                    onClick={resetSpeed}
                    disabled={isPlaying ? true : false}
                >
                    Reset
                </button>
            </label>
        </ControlStyles>
    );
};

export default connect(
    (state) => ({
        scale: state.game.boardZoom,
        isPlaying: state.game.isPlaying,
        genCount: state.genCount,
        timerId: state.game.timerId,
        speed: state.game.simSpeed,
    }),
    (dispatch) => ({
        setZoom: (scale) => dispatch(setBoardZoom(scale)),
        resetZoom: () => dispatch(resetBoardZoom()),
        resetBoard: () => dispatch(resetBoardState()),
        generateNext: () => dispatch(nextGen()),
        pauseButton: (timerId = null) => dispatch(togglePause(timerId)),
        speedUpdate: (speed) => dispatch(changeSpeed(speed)),
        randomizeBoard: () => dispatch(randomize()),
    })
)(Controls);
