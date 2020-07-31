import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export const action = (type, payload = null) =>
    store.dispatch({ type, payload });

export const readState = (reducer = null) => {
    const stateContainer = store.getState();
    if (reducer) {
        return stateContainer[reducer];
    } else {
        return stateContainer;
    }
};

export default store;
