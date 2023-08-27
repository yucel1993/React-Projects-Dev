import { useDispatch, useSelector } from "react-redux";
import { fetchFail, fetchStart, getAllSuccess } from "../feature/stockSlice";

import { toastSuccessNotify, toastErrorNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";

const useStockCall = () => {
  const dispatch = useDispatch();

  const { axiosWithToken } = useAxios();

  const getAll = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`/stock/${url}/`);
      dispatch(getAllSuccess({ url, data }));
     
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
     
    }
  };

  const deleteAll = async (url, id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`/stock/${url}/${id}/`);
      toastSuccessNotify("Successfull ");
      getAll(url);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
      toastErrorNotify("Delete Failed");
    }
  };
  
  const postAll=async(url,data)=>{
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`/stock/${url}/`,data);
      
      toastSuccessNotify("Successfull ");
      getAll(url)
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
      toastErrorNotify(" Failed");
     
    }
  };
  const putAll=async(url,data)=>{
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`/stock/${url}/${data.id}/`,data);
      
      toastSuccessNotify("Successfull ");
      getAll(url)
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
      toastErrorNotify(" Failed");
     
    }
  }

  return { getAll, deleteAll,postAll,putAll };
};

export default useStockCall;
