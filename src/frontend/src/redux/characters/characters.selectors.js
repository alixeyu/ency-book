import { createSelector } from "reselect"

const selectCharacters = state => state.characters;

export const selectCharactersCollections = createSelector(
    [selectCharacters],
    characters => characters.collections
);

export const selectCharactersList = createSelector(
    [selectCharactersCollections],
    collections => Object.keys(collections).map(key => collections[key])
);

export const selectCharactersCollection = createSelector(
    [selectCharacters],
    characters => characters
)

export const selectCharacter = characterUid => createSelector(
    [selectCharactersList],
    characters => characters.find(character => character.uid === characterUid)
);
