import React from "react";
import ControlStyles from "./ControlStyles";
import { connect } from "react-redux";
import { setBoardZoom, resetBoardZoom } from "../../store/actions";

const Controls = (props) => {
    const { scale, setZoom, resetZoom } = props;

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
            <label>
                <button>Prev</button>
                <button>Play</button>
                <button>Next</button>
            </label>
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
    }),
    (dispatch) => ({
        setZoom: (scale) => dispatch(setBoardZoom(scale)),
        resetZoom: () => dispatch(resetBoardZoom()),
    })
)(Controls);
