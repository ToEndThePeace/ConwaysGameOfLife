import { combineReducers } from "redux";

import { reducer as game } from "./gameReducer";
import { reducer as board } from "./boardReducer";
import { reducer as genCount } from "./genCounter";

export default combineReducers({
    game,
    board,
    genCount,
});
