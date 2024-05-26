import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import legendsReducer from "./legends/legends.reducer";

const persistConfig = {
    key: "root",
    storage,
    whitelist: []
};
const rootReducer = combineReducers({
    legends: legendsReducer,
});

export default persistReducer(persistConfig, rootReducer);
