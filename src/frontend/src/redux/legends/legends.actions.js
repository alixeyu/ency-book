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

        async () => {
            try {
                dispatch(fetchCollectionStart());

                const { data } = await axios.get(url="http://web-backend:15000/legends/");
                dispatch(fetchCollectionSuccess(data));
            } catch (error) {
                dispatch(fetchCollectionFailure(error.message));
            }
        }
    };
};
