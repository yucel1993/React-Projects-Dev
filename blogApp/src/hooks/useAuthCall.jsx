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
  const {Token} =useSelector((state)=>state.auth)

  const login = async (userData) => {
    dispatch(fetchStart());
    const BASE_URL = import.meta.env.VITE_BASE_URL;
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
    const dispatch = useDispatch();
    const BASE_URL = import.meta.env.VITE_BASE_URL;
  
    dispatch(fetchStart());
    try {
      await axios.post(
        `${BASE_URL}/users/auth/logout/`,
        {},
        {
          headers: {
            Authorization: `Token ${Token}`,
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
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/account/register/`,
        userData
      );
      dispatch(registerSuccess(data));
      toastSuccessNotify("Register successfull");
      navigate("/stock");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify("Register failed.");
    }
  };

  return { login, logout, register };
};

export default useAuthCall;
