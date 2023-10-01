import { createSlice } from "@reduxjs/toolkit";

export const genreOrCategorySlice = createSlice({
  name: "genreOrCategory",
  initialState: {
    genreIdOrCategoryName: "",
    page: 1,
    searchQuery: "",
  },
  reducers: {
    selectGenreOrCategory: (state, {payload}) => {
     state.genreIdOrCategoryName=payload;
     state.searchQuery=""
    },
    searchMovie: (state, {payload}) => {
     console.log(payload)
      state.searchQuery=payload;
     },
  },
});

export const { selectGenreOrCategory ,searchMovie} = genreOrCategorySlice.actions;
export default genreOrCategorySlice.reducer;
