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
    },
  },
});

export const { selectGenreOrCategory } = genreOrCategorySlice.actions;
export default genreOrCategorySlice.reducer;
