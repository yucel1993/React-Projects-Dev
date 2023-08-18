import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
  name: "stock",

  initialState: {
    loading: false,
    error: false,
    sales: [],
    purchases: [],
    firms: [],
    categories: [],
    brands: [],
    products: [],
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },

    // getStockSuccess: (state, { payload: { data, url } }) => {
    //   state.loading = false;
    //   state[url] = data;
    // },
    getStockSuccess: (state, { payload }) => {
      state.loading = false
      state[payload.url] = payload.data
    },
       // ? Products, categories ve brands state'lerini güncelleyen action fonks.
       getProdCatBrandsSuccess: (state, { payload }) => {
        state.loading = false
        state.products = payload[0]
        state.categories = payload[1]
        state.brands = payload[2]
      },

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});



export const {
  fetchStart,
  getStockSuccess,
  getProdCatBrandsSuccess,
  fetchFail,
} = stockSlice.actions;
export default stockSlice.reducer;

// ! for the parametric function you have to also use parametriuc slice like top
// getFirmsSuccess:(state,{payload})=>{
//   state.loading=false
//   state.firms=payload
// },

// getBrandsSuccess:(state,{payload})=>{
//   state.loading=false
//   state.brands=payload
// },
// getSalesSuccess:(state,{payload})=>{
//   state.loading=false
//   state.sales=payload
// },
