import { CHARACTERS_DATA } from "./characters.data";

const INITIAL_STATE = {
    collections: CHARACTERS_DATA
};

const charactersReducer = ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        default:
            return state
    }
};

export default charactersReducer;
