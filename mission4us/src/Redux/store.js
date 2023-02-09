import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";

import CreateCvSlice from "./createCv/slice";
import globalReducer from "./modeTheme";


const reducers = combineReducers({
  cvs:CreateCvSlice,
  global: globalReducer,

});

// const store = configureStore({
//   reducer: {
//     global: globalReducer,
//   },
// });

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
