export const UPDATE_BOARD = "UPDATE_BOARD";
export const RESET_BOARD_STATE = "RESET_BOARD_STATE";
export const UPDATE_BUFFER = "UPDATE_BUFFER";
export const NEXT_GEN = "NEXT_GEN";
export const updateBoard = (arr) => ({
    type: UPDATE_BOARD,
    payload: arr,
});
export const resetBoardState = () => ({
    type: RESET_BOARD_STATE,
});
export const updateBuffer = (arr) => ({
    type: UPDATE_BUFFER,
    payload: arr,
});
export const nextGen = () => ({
    type: NEXT_GEN,
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
export const togglePause = (timerId) => ({
    type: TOGGLE_PAUSE,
    payload: timerId,
});

export const CLICK_CELL = "CLICK_CELL";
export const clickCell = (x, y) => ({
    type: CLICK_CELL,
    col: x,
    row: y,
});

// Controls need to be put in separate reducer
export const UPDATE_ROWS = "UPDATE_ROWS";
export const UPDATE_COLS = "UPDATE_COLS";
export const CHANGE_SPEED = "CHANGE_SPEED";
export const updateRows = (rows) => ({
    type: UPDATE_ROWS,
    payload: rows,
});
export const updateCols = (cols) => ({
    type: UPDATE_COLS,
    payload: cols,
});
export const changeSpeed = (speed) => ({
    type: CHANGE_SPEED,
    payload: speed,
});
