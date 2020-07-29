import { put, select } from "redux-saga/effects";
import * as actions from "../actions";

export function* init() {
    const {
        game: { rows, cols },
    } = yield select();
    const arr = new Array(cols).fill(false).map(() => new Array(rows).fill(false));
    yield put(actions.boardInit(arr));
}
