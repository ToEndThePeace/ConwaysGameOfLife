export const UPDATE_BOARD = "UPDATE_BOARD";
export const updateBoard = (arr) => ({
    type: UPDATE_BOARD,
    payload: arr,
});

export const UPDATE_BUFFER = "UPDATE_BUFFER";
export const updateBuffer = (arr) => ({
    type: UPDATE_BUFFER,
    payload: arr,
});

export const SET_BOARD_ZOOM = "SET_BOARD_ZOOM";
export const RESET_BOARD_ZOOM = "RESET_BOARD_ZOOM";
export const setBoardZoom = (scale) => ({
    type: SET_BOARD_ZOOM,
    payload: scale / 100,
});
export const resetBoardZoom = () => ({
    type: RESET_BOARD_ZOOM,
});

export const TOGGLE_PAUSE = "TOGGLE_PAUSE";
export const togglePause = () => ({
    type: TOGGLE_PAUSE,
});

export const CLICK_CELL = "CLICK_CELL";
export const clickCell = (x, y) => ({
    type: CLICK_CELL,
    col: x,
    row: y,
});
