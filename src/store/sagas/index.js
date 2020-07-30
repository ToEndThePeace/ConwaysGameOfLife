import { all } from "redux-saga/effects";

import { init, boardWatcher, boardClear } from "./gameSaga";

export default function* rootSaga() {
    yield all([init(), boardWatcher(), boardClear()]);
}
