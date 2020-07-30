import { put, select, takeEvery, take, call } from "redux-saga/effects";
import {
    updateBoard,
    updateBuffer,
    UPDATE_BOARD,
    RESET_BOARD_STATE,
    TOGGLE_PAUSE,
} from "../actions";
import calculateBuffer from "../../bin/bufferCalculator";
import { readState } from "..";

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

export function* bufferCreation(action) {
    const { payload: currentBoard } = action;
    const buffer = calculateBuffer(currentBoard);
    yield put(updateBuffer(buffer));
}

export function* boardWatcher() {
    yield takeEvery(UPDATE_BOARD, bufferCreation);
}

export function* pauseWatcher() {
    while (true) {
        yield take(TOGGLE_PAUSE);
        const board = yield readState("board");
        yield call(bufferCreation, board);
    }
}

export function* boardClear() {
    yield takeEvery(RESET_BOARD_STATE, init);
}

export function* nextGeneration(buffer) {
    yield put(updateBuffer(buffer));
}

export function* iterator() {
    while (true) {
        yield take("NEXT_GEN");
        const { buffer } = readState("game");
        console.log(buffer);
        yield call(nextGeneration, buffer);
    }
}
