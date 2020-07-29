import update from "immutability-helper";
import {
    BOARD_INIT,
    SET_BOARD_ZOOM,
    RESET_BOARD_ZOOM,
    CLICK_CELL,
} from "../actions";

const initialState = {
    main: null,
    boardZoom: 1,
    rows: 40,
    cols: 25,
    isPlaying: false,
};
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BOARD_INIT:
            return {
                ...state,
                main: action.payload,
            };
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
        case CLICK_CELL:
            return {
                ...state,
                main: update(state.main, {
                    [action.row]: {
                        [action.col]: {
                            $apply: (cell) => !cell,
                        },
                    },
                }),
            };
        default:
            return state;
    }
};
