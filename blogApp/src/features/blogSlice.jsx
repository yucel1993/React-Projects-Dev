
import { createSlice } from "@reduxjs/toolkit"

const blogSlice = createSlice({
  name: "blog",

  initialState: {
    loading: false,
    error: false,
    myBlog:[],
    blogs:[],
    categories:[],
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true
      state.error = false
    },



    // getStockSuccess: (state, { payload }) => {
    //   state.loading = false
    //   state[payload.url] = payload.data
    // },

  
    getBlogsSuccess: (state, { payload }) => {
      state.loading = false
      state.blogs = payload
    },
    // getBrandsSuccess: (state, { payload }) => {
    //   state.loading = false
    //   state.brands = payload
    // },
    // getSalesSuccess: (state, { payload }) => {
    //   state.loading = false
    //   state.sales = payload
    // },
    
    getCategoriesSuccess:(state,{payload})=>{
state.loading=false
state.categories=payload
    },

    createMyBlog:(state,{payload})=>{
        state.loading=false
        state.myBlog=payload
            },

    fetchFail: (state) => {
      state.loading = false
      state.error = true
    },
  },
})


export const {
  fetchStart,
  fetchFail,
  getBlogsSuccess,
  getCategoriesSuccess,
  createMyBlog
 
} = blogSlice.actions
export default blogSlice.reducer
