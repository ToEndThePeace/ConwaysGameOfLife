import {
    SET_BOARD_ZOOM,
    RESET_BOARD_ZOOM,
    TOGGLE_PAUSE,
    UPDATE_BUFFER,
    UPDATE_ROWS,
    UPDATE_COLS,
    CHANGE_SPEED,
} from "../actions";

const initialState = {
    boardZoom: 1,
    rows: 25,
    cols: 25,
    simSpeed: 200,
    isPlaying: false,
    timerId: null,
    buffer: null,
};
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOARD_ZOOM:
            return {
                ...state,
                boardZoom: action.payload,
            };
        case RESET_BOARD_ZOOM:
            return {
                ...state,
                boardZoom: initialState.boardZoom,
            };
        case TOGGLE_PAUSE:
            return {
                ...state,
                isPlaying: !state.isPlaying,
                timerId: action.payload,
            };
        case UPDATE_BUFFER:
            return {
                ...state,
                buffer: action.payload,
            };
        case UPDATE_ROWS:
            return {
                ...state,
                rows: action.payload,
            };
        case UPDATE_COLS:
            return {
                ...state,
                cols: action.payload,
            };
        case CHANGE_SPEED:
            return {
                ...state,
                simSpeed: action.payload,
            };
        default:
            return state;
    }
};
