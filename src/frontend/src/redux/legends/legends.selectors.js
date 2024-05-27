import { createSelector } from "reselect";

const selectLegends = state => state.legends;

export const selectCollection = createSelector(
    [selectLegends],
    legends => legends.collections
);

export const selectCollectionForPreview = createSelector(
    [selectCollection],
    collections => Object.keys(collections).map(key => collections[key])
);
