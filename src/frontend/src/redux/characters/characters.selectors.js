import { createSelector } from "reselect"

const selectCharacters = state => state.characters;

export const selectCharactersCollections = createSelector(
    [selectCharacters],
    characters => characters.collections
);

export const selectCharactersList = createSelector(
    [selectCharactersCollections],
    collections => {
        console.log(collections);
        let data = Object.keys(collections).map(key => collections[key]);
        return data;
    }
);
