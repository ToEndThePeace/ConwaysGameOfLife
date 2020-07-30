import { combineReducers } from "redux";

import { reducer as game } from "./gameReducer";
import { reducer as board } from "./boardReducer";

export default combineReducers({
    game,
    board,
});
