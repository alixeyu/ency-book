import axios from "axios";

import CharactersActionTypes from "./characters.types";

export const fetchCollectionStart = () => ({
    type: CharactersActionTypes.FETCH_COLLECTION_START,
});

export const fetchCollectionSuccess = collectionMap => ({
    type: CharactersActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: collectionMap,
});

export const fetchCollectionFailure = errorMessage => ({
    type: CharactersActionTypes.FETCH_COLLECTION_FAILURE,
    payload: errorMessage,
});

export const fetchCollectionStartAsync = () => {
    return dispatch => {

        async () => {
            try {
                dispatch(fetchCollectionStart());

                const { data } = await axios.get(url="http://localhost:5000/characters/");
                dispatch(fetchCollectionSuccess(data));
            } catch (error) {
                dispatch(fetchCollectionFailure(error.message));
            }
        }
    };
};
