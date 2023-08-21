import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    username: null,
    loading: false,
    error: false,
    image:false,
    bio:false,
   email:false,
    token: null,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.username= action.payload?.user?.username;
      state.email= action.payload?.user?.email;
      
      state.token = action.payload?.key;
      state.image = action.payload?.user?.image;
      state.bio = action.payload?.user?.bio;
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.currentUser = null;
      state.token = null;
      state.username = null;
      state.image = false;
      state.bio = false;
      state.email = null;
    },
    registerSuccess: (state, { payload }) => {
      state.loading = false;
      state.username = payload?.username;
      state.token = payload?.token;
      state.image = payload?.image;
      state.bio = payload?.bio;
      state.email =  payload?.email
      state.error = false;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
  fetchFail,
} = authSlice.actions;
export default authSlice.reducer;
