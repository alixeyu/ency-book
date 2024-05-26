import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";

import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];
const store = configureStore({ reducer: rootReducer, middleware: () => middlewares });
const persistor = persistStore(store);

export { store, persistor };
