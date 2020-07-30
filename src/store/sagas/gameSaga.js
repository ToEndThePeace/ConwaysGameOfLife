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

// THESE ARE WORKING FINE
export function* makeBoard() {
    const {
        game: { rows, cols },
    } = yield select();
    const arr = [];
    for (let i = 0; i < cols; i++) {
        arr.push(new Array(rows).fill(false));
    }
    return arr;
}

export function* init() {
    const arr = yield makeBoard();
    yield put(updateBoard(arr));
}

export function* boardClear() {
    yield takeEvery(RESET_BOARD_STATE, init);
}
export function* boardWatcher() {
    yield takeEvery(UPDATE_BOARD, bufferCreation);
}

// Something isn't being passed right in these

export function* bufferCreation(action) {
    const { payload: currentBoard } = action;
    const buffer = calculateBuffer(currentBoard);
    yield put(updateBuffer(buffer));
}

export function* nextGeneration(buffer) {
    yield put(updateBoard(buffer));
}

export function* pauseWatcher() {
    while (true) {
        yield take(TOGGLE_PAUSE);
    }
}

export function* iterator() {
    while (true) {
        yield take("NEXT_GEN");
        const board = readState("board");
        yield call(bufferCreation, { payload: board });
        const { buffer } = readState("game");
        yield call(nextGeneration, buffer);
    }
}
