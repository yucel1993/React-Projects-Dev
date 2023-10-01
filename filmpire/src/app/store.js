
import { configureStore,  getDefaultMiddleware } from "@reduxjs/toolkit"
import movieReducer from "../components/feature/movieSlice"
import genreOrCategoryReducer from "../components/feature/genreOrCategorySlice"

const store = configureStore({
  reducer: {
    movies: movieReducer,
    genreOrCategory : genreOrCategoryReducer,

    
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export default store