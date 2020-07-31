import React from "react";
import { connect } from "react-redux";
import ControlStyles from "./ControlStyles";
import {
    setBoardZoom,
    resetBoardZoom,
    resetBoardState,
    nextGen,
    togglePause,
    changeSpeed,
    randomize,
    loadPreset,
} from "../../store/actions";

import { presetKeys } from "../../store/sagas/gameSaga";

const Controls = ({
    scale,
    isPlaying,
    genCount,
    timerId,
    speed,
    preset,
    setZoom,
    resetZoom,
    resetBoard,
    generateNext,
    pauseButton,
    speedUpdate,
    randomizeBoard,
    updatePreset,
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
    const presetHandler = (e) => {
        const { value: newKey } = e.target;
        updatePreset(newKey);
    };

    return (
        <ControlStyles className="Controls">
            <label>
                <button
                    onClick={randomizeBoard}
                    disabled={isPlaying ? true : false}
                >
                    Randomize
                </button>
            </label>
            <div>Generation:&nbsp;{genCount}</div>
            <label>
                <select
                    defaultValue=""
                    disabled={isPlaying ? true : false}
                    onChange={presetHandler}
                >
                    <option value="" disabled hidden>
                        Choose Preset
                    </option>
                    {presetKeys.map((key, i) => {
                        return (
                            <option key={i} value={key}>
                                {key}
                            </option>
                        );
                    })}
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
        preset: state.game.preset,
    }),
    (dispatch) => ({
        setZoom: (scale) => dispatch(setBoardZoom(scale)),
        resetZoom: () => dispatch(resetBoardZoom()),
        resetBoard: () => dispatch(resetBoardState()),
        generateNext: () => dispatch(nextGen()),
        pauseButton: (timerId = null) => dispatch(togglePause(timerId)),
        speedUpdate: (speed) => dispatch(changeSpeed(speed)),
        randomizeBoard: () => dispatch(randomize()),
        updatePreset: (key) => dispatch(loadPreset(key)),
    })
)(Controls);
