export const BOARD_INIT = "BOARD_INIT";
export const boardInit = (arr) => ({
    type: BOARD_INIT,
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

export const CLICK_CELL = "CLICK_CELL";
export const clickCell = (x, y) => ({
    type: CLICK_CELL,
    col: x,
    row: y
});
