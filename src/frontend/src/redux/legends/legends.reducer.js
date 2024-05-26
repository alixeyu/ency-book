import { FULL_LEGENDS_DATA } from "./full-legends.data";
import { LEGENDS_DATA } from "./legends.data";

const INITIAL_STATE = {
    collection: LEGENDS_DATA
};

const legendsReducer = ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        default:
            return state
    }
};

export default legendsReducer;
