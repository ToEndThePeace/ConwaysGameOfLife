import { all } from "redux-saga/effects";

import {
    init,
    boardWatcher,
    boardClear,
    iterator,
    watchRandomizer,
} from "./gameSaga";

export default function* rootSaga() {
    yield all([
        init(),
        boardWatcher(),
        boardClear(),
        iterator(),
        watchRandomizer(),
    ]);
}
