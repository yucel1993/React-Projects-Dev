import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
  name: "stock",
  initialState: {
    
    loading: false,
    error: false,
    sales:[],
    purchases:[],
    firms:[],
    categories:[],
    brands:[],
    products:[],
    
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
   getAllSuccess:(state,{payload:{url,data}})=>{
    state[url]=data;
    state.loading=false;
   },
   
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
    fetchStart,
    getAllSuccess,
    fetchFail,
}=stockSlice.actions;
export default stockSlice.reducer
