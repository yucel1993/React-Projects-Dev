
import { configureStore,  getDefaultMiddleware } from "@reduxjs/toolkit"
import movieReducer from "../components/feature/movieSlice"


const store = configureStore({
  reducer: {
    movies: movieReducer,
    
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export default store