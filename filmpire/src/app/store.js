
import { configureStore,  getDefaultMiddleware } from "@reduxjs/toolkit"
import movieReducer from "../components/feature/movieSlice"
import genreOrCategoryReducer from "../components/feature/genreOrCategorySlice"
import favoriteOrWatchListReducer from "../components/feature/favoriteOrWatchListSlice"
const store = configureStore({
  reducer: {
    movies: movieReducer,
    genreOrCategory : genreOrCategoryReducer,
    favoriteOrWatchList: favoriteOrWatchListReducer,

    
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export default store