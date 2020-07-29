import { all } from "redux-saga/effects";

import { init } from "./gameSaga";

export default function* rootSaga() {
    yield all([init()]);
}
