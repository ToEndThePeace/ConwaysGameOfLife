import {
    SET_BOARD_ZOOM,
    RESET_BOARD_ZOOM,
    TOGGLE_PAUSE,
    UPDATE_BUFFER,
} from "../actions";

const initialState = {
    boardZoom: 1,
    rows: 25,
    cols: 25,
    isPlaying: false,
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
            };
        case UPDATE_BUFFER:
            return {
                ...state,
                buffer: action.payload,
            };
        default:
            return state;
    }
};
