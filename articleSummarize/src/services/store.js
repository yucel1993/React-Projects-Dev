import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"

import dataReducer from "../feature/dataSlice"

import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage/session" //? default : localStorage

const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(persistConfig,  dataReducer)

const store = configureStore({
  reducer: {
  
    data: persistedReducer ,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export const persistor = persistStore(store)
export default store
