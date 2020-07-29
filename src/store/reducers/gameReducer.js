import { BOARD_INIT, SET_BOARD_ZOOM } from "../actions";

const initialState = {
    main: null,
    buffer: null,
    boardZoom: 1,
    rows: 100,
    cols: 75,
};
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BOARD_INIT:
            return {
                ...state,
                main: action.payload,
                buffer: action.payload,
            };
        case SET_BOARD_ZOOM:
            return {
                ...state,
                boardZoom: action.payload,
            };
        default:
            return state;
    }
};
