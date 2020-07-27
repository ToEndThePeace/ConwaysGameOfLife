import { takeEvery, put, spawn, all } from "redux-saga/effects";

function* helloSaga() {
    console.log("Hello world~");
    yield;
}

function* incrementCounter() {
    yield put({ type: "INCREMENT_COUNTER" });
}

function* incrementWatcher() {
    console.log("WATCHER STARTED");
    yield takeEvery("BUTTON_PRESS", incrementCounter);
}

export default function* testSagas() {
    yield all([spawn(helloSaga), spawn(incrementWatcher)]);
}
