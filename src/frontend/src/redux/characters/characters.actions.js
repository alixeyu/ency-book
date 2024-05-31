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
        console.log("Fetching a list of characters...");

        async () => {
            try {
                dispatch(fetchCollectionStart());

                let api_url = process.env.REACT_APP_API_URL + "/characters/";

                const { data } = await axios.get(url=api_url);
                dispatch(fetchCollectionSuccess(data));
            } catch (error) {
                dispatch(fetchCollectionFailure(error.message));
            }
        }
    };
};
