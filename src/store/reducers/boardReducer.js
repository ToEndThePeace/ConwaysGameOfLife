// import update from "immutability-helper";
import { UPDATE_BOARD, CLICK_CELL } from "../actions";

const initialState = null;
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_BOARD:
            return action.payload;
        case CLICK_CELL:
            return [
                ...state.slice(0, action.row),
                [
                    ...state[action.row].slice(0, action.col),
                    !state[action.row][action.col],
                    ...state[action.row].slice(action.col + 1),
                ],
                ...state.slice(action.row + 1),
            ];
        default:
            return state;
    }
};
