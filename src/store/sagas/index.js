import { all } from "redux-saga/effects";

import testSagas from "./test";

export default function* rootSaga() {
    yield all([testSagas()]);
}
