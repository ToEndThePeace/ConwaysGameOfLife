import { put, select, takeEvery, take, call } from "redux-saga/effects";
import {
    updateBoard,
    updateBuffer,
    UPDATE_BOARD,
    RESET_BOARD_STATE,
    RANDOMIZE,
} from "../actions";
import calculateBuffer from "../../bin/bufferCalculator";
import { readState } from "..";

const randomBool = () => {
    return Math.random() < 0.7 ? false : true;
};

// THESE ARE WORKING FINE
export function* makeBoard(randomize = false) {
    const {
        game: { rows, cols },
    } = yield select();
    const arr = [];
    for (let i = 0; i < cols; i++) {
        // new Array(rows).fill(randomize ? randomBool() : false));
        arr.push([]);
        for (let j = 0; j < rows; j++) {
            arr[i].push(randomize ? randomBool() : false);
        }
    }
    return arr;
}

export function* init(randomize = false) {
    const arr = yield makeBoard(randomize);
    yield put(updateBoard(arr));
}

export function* boardClear() {
    while (true) {
        yield take(RESET_BOARD_STATE);
        yield call(init, false);
    }
}

export function* boardWatcher() {
    yield takeEvery(UPDATE_BOARD, bufferCreation);
}

export function* bufferCreation(action) {
    const { payload: currentBoard } = action;
    const buffer = calculateBuffer(currentBoard);
    yield put(updateBuffer(buffer));
}

export function* nextGeneration(buffer) {
    yield put(updateBoard(buffer));
}

export function* watchRandomizer() {
    while (true) {
        yield take(RANDOMIZE);
        const board = yield call(makeBoard, true);
        yield put(updateBoard(board));
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
