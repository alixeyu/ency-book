import axios from "axios";

import LegendsActionTypes from "./legends.types";

export const fetchCollectionStart = () => ({
    type: LegendsActionTypes.FETCH_COLLECTION_START,
});

export const fetchCollectionSuccess = collectionMap => ({
    type: LegendsActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: collectionMap,
});

export const fetchCollectionFailure = errorMessage => ({
    type: LegendsActionTypes.FETCH_COLLECTION_FAILURE,
    payload: errorMessage,
});

export const fetchCollectionStartAsync = () => {
    return dispatch => {
        dispatch(fetchCollectionStart());

        let api_url = process.env.REACT_APP_API_URL + "/legends/";

        axios.get(api_url)
        .then(response => dispatch(fetchCollectionSuccess(response.data)))
        .catch(error => dispatch(fetchCollectionFailure(error.message)));
    };
};
