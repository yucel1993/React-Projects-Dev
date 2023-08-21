import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from "../features/authSlice";

const useAuthCall = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {token} =useSelector((state)=>state.auth)
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const login = async (userData) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${BASE_URL}/users/auth/login/`,
        userData
      );
      console.log(data);
      dispatch(loginSuccess(data));
      toastSuccessNotify("Login successfull");
      navigate("/");
    } catch (error) {
      console.log(error.message);
      dispatch(fetchFail());
      toastErrorNotify("Login failed");
    }
  };

  const logout = async () => {
  
    
  
    dispatch(fetchStart());
    try {
      await axios.post(
        `${BASE_URL}/users/auth/logout/`,
        
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      dispatch(logoutSuccess());
      toastSuccessNotify('Logout successful');
      navigate('/');
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify('Logout failed');
    }
  };

  const register = async (userData) => {
    console.log(userData)
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${BASE_URL}/users/register/`,
        userData
      );
      dispatch(registerSuccess(data));
      toastSuccessNotify("Register successfull");
      navigate("/");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify("Register failed.");
    }
  };

  return { login, logout, register };
};

export default useAuthCall;
