import { combineReducers } from "redux";

import { reducer as game } from "./gameReducer";

export default combineReducers({
    game,
});
