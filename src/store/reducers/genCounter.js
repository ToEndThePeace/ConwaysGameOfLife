import { NEXT_GEN, RESET_BOARD_STATE } from "../actions";

const initialState = 0;
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case NEXT_GEN:
            return state + 1;
        case RESET_BOARD_STATE:
            return initialState;
        default:
            return state;
    }
};
