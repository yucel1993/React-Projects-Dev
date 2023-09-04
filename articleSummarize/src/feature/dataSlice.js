import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    
    loading: false,
    error: false,
    data:[],


    
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
   getAllSuccess:(state,{payload})=>{
    state.data=payload
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
}=dataSlice.actions;
export default dataSlice.reducer
