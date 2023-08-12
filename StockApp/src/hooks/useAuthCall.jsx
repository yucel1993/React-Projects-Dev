import React from "react";
import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, loginSuccess, logoutSuccess, registerSuccess } from "../features/authSlice";

const useAuthCall = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = async (userData) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/account/auth/login/`,
        userData
      );
      console.log(data);
      dispatch(loginSuccess(data));
      toastSuccessNotify("Login performed");
      navigate("/stock");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify(error.response.data.non_field_errors[0])
    }
  };

  const logout = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/account/auth/logout/`
        
      );
      
      dispatch(logoutSuccess());
      toastSuccessNotify("Logout performed");
      navigate("/");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify(error)
    }
  };


  const register = async (userData) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/account/register/`,
        userData
      );
      console.log(data);
      dispatch(registerSuccess(data));
      toastSuccessNotify("Register performed");
      navigate("/stock");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify("User is already exist")
    }
  };





  return { login,logout,register };
};

export default useAuthCall;
