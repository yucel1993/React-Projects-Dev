import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from "../feature/authSlice";

const useAuthCall = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = async (userData) => {
    // const BASE_URL = "https://10001.fullstack.clarusway.com"

    // console.log(import.meta.env.VITE_API_KEY)
    // console.log(import.meta.env.VITE_API_KEY_PROD)

    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/account/auth/login`,
        userData
      );
      dispatch(loginSuccess(data));
      toastSuccessNotify("login success");
      navigate("/stock");
    } catch (error) {
      console.log(error.message);
      dispatch(fetchFail());
      toastErrorNotify(error.response.data.non_field_errors[0]);
    }
  };

  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}/account/auth/logout`);
      dispatch(logoutSuccess());
      toastSuccessNotify("Logout success");
      navigate("/");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify("Logout failed");
    }
  };

  const register = async (userData) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/account/register`,
        userData
      );
      dispatch(registerSuccess(data));
      toastSuccessNotify("register success");
      navigate("/stock");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify("Register failed");
    }
  };

  return { login, logout, register };
};

export default useAuthCall;
