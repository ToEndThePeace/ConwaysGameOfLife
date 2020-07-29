export const BOARD_INIT = "BOARD_INIT";
export const boardInit = (arr) => ({
    type: BOARD_INIT,
    payload: arr,
});

export const SET_BOARD_ZOOM = "SET_BOARD_ZOOM";
export const setBoardZoom = (scale) => ({
    type: SET_BOARD_ZOOM,
    payload: scale / 100,
});

export const resetBoardZoom = () => ({
    type: SET_BOARD_ZOOM,
    payload: 1,
});
