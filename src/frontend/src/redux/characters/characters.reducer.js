import { CHARACTERS_DATA } from "./characters.data";
import CharactersActionTypes from "./characters.types";

const INITIAL_STATE = {
    collections: CHARACTERS_DATA,
    isFetching: false,
    errorMessage: undefined,
};

const charactersReducer = ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case CharactersActionTypes.FETCH_COLLECTION_START:
            return {
                ...state,
                isFetching: true,
            };
        case CharactersActionTypes.FETCH_COLLECTION_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload,
            };
        case CharactersActionTypes.FETCH_COLLECTION_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload,
            }
        default:
            return state
    }
};

export default charactersReducer;
