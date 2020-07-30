import { all } from "redux-saga/effects";

import { init, boardWatcher } from "./gameSaga";

export default function* rootSaga() {
    yield all([init(), boardWatcher()]);
}
