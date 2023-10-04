// import { createSlice } from "@reduxjs/toolkit";

// const favoriteOrWatchListSlice = createSlice({
//   name: "movie",
//   initialState: {
//     loading: false,
//     error: false,
//     favoriteMovies: { results: [] },
//     watchListMovies: { results: [] },
//   },
//   reducers: {
//     fetchStart: (state) => {
//       state.loading = true;
//       state.error = false;
//     },
//     getFavoriteOrWatchListSuccess: (state, { payload: { word, data } }) => {
//       // Check if the word is "favoriteMovies" or "watchListMovies"
//       if (word === "favoriteMovies") {
//         // Update the favoriteMovies.results array by pushing the new data
//         state.favoriteMovies.results.push(data);
//       } else if (word === "watchListMovies") {
//         // Update the watchListMovies.results array by pushing the new data
//         state.watchListMovies.results.push(data);
//       }
//       state.loading = false;
//     },
//     fetchFail: (state) => {
//       state.loading = false;
//       state.error = true;
//     },
//   },
// });

// export const { fetchStart, getFavoriteOrWatchListSuccess, fetchFail } =
//   favoriteOrWatchListSlice.actions;

// export default favoriteOrWatchListSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const favoriteOrWatchListSlice = createSlice({
  name: "movie",
  initialState: {
    loading: false,
    error: false,
    favoriteMovies: { results: [] },
    watchListMovies: { results: [] },
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getFavoriteOrWatchListSuccess: (state, { payload: { word, data } }) => {
      // Check if the word is "favoriteMovies" or "watchListMovies"
      const listToUpdate = state[word];
      const existingIndex = listToUpdate.results.findIndex((movie) => movie.id === data.id);

      if (existingIndex !== -1) {
        // Movie with matching ID found, remove it from the list
        listToUpdate.results = listToUpdate.results.filter((movie) => movie.id !== data.id);
      } else {
        // Movie not found, add it to the list
        listToUpdate.results.push(data);
      }
      state.loading = false;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, getFavoriteOrWatchListSuccess, fetchFail } =
  favoriteOrWatchListSlice.actions;

export default favoriteOrWatchListSlice.reducer;
