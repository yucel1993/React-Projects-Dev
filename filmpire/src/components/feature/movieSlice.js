import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    loading: false,
    error: false,
    movies: [],
    genres: [],
    recommendation:[]
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    //    getAllSuccess:(state,{payload:{url,data}})=>{
    //     state[url]=data;
    //     state.loading=false;
    //    },

    getMoviesSuccess: (state, { payload: { data } }) => {
      state.movies = data;
      state.loading = false;
    },
    getGenresSuccess: (state, { payload: { data } }) => {
      state.genres = data;
      state.loading = false;
    },
    getRecommedationSuccess: (state, { payload: { data } }) => {
      state.recommendation = data;
      state.loading = false;
    },

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, getMoviesSuccess,getGenresSuccess,getRecommedationSuccess, fetchFail } = movieSlice.actions;
export default movieSlice.reducer;
