import LegendsActionTypes from "./legends.types";

const INITIAL_STATE = {
    collections: [],
    isFetching: false,
    errorMessage: undefined,
};

const legendsReducer = ( state = INITIAL_STATE, action ) => {
    console.log(action);
    switch (action.type) {
        case LegendsActionTypes.FETCH_COLLECTION_START:
            return {
                ...state,
                isFetching: true,
            };
        case LegendsActionTypes.FETCH_COLLECTION_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload,
            };
        case LegendsActionTypes.FETCH_COLLECTION_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload,
            }
        default:
            return state;
    }
};

export default legendsReducer;
