import { put, select, takeEvery } from "redux-saga/effects";
import * as actions from "../actions";

export function* makeBoard() {
    const {
        game: { rows, cols },
    } = yield select();
    const arr = new Array(cols)
        .fill(false)
        .map(() => new Array(rows).fill(false));
    return arr;
}

export function* init() {
    const arr = yield makeBoard();
    yield put(actions.boardInit(arr));
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
