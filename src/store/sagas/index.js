import { all } from "redux-saga/effects";

import {
    init,
    boardWatcher,
    boardClear,
    pauseWatcher,
    iterator,
} from "./gameSaga";

export default function* rootSaga() {
    yield all([
        init(),
        boardWatcher(),
        boardClear(),
        pauseWatcher(),
        iterator(),
    ]);
}
