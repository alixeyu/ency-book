import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { thunk } from "redux-thunk";

import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger, thunk];
const store = configureStore({ reducer: rootReducer, middleware: () => middlewares });
const persistor = persistStore(store);

export { store, persistor };
