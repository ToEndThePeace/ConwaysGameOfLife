import { put, select } from "redux-saga/effects";
import * as actions from "../actions";

export function* init() {
    const {
        game: { rows, cols },
    } = yield select();
    const arr = new Array(cols).fill(0).map(() => new Array(rows).fill(0));
    yield put(actions.boardInit(arr));
}
