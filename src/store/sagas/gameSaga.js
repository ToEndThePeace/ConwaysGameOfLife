import { put, select, takeEvery } from "redux-saga/effects";
import {
    updateBoard,
    updateBuffer,
    UPDATE_BOARD,
    RESET_BOARD_STATE,
} from "../actions";

export function* makeBoard() {
    const {
        game: { rows, cols },
    } = yield select();
    const arr = [];
    for (let i = 0; i < cols; i++) {
        arr.push(new Array(rows).fill(false));
    }
    // const arr = new Array(cols)
    //     .fill(false)
    //     .map(() => new Array(rows).fill(false));
    return arr;
}

export function* init() {
    const arr = yield makeBoard();
    yield put(updateBoard(arr));
}

export function* boardWatcher() {
    yield takeEvery(UPDATE_BOARD, updateBuffer);
}

export function* boardClear() {
    yield takeEvery(RESET_BOARD_STATE, init);
}

// export function* nextGeneration() {
//     const {
//         game: { rows, cols, main },
//     } = select();
//     // const buffer =
// }

// export function* iterator() {
//     yield takeEvery("NEXT_GEN", nextGeneration);
// }
