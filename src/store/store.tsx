import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";

import builderReducer from "./builder.slice";

const store = configureStore({
  reducer: {
    builder: builderReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
