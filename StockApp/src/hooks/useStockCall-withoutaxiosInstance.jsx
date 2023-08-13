
import { fetchFail, getStockSuccess, fetchStart} from "../features/stockSlice";
import { useDispatch, useSelector } from "react-redux";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import {useAxios} from "./useAxios"

const useStockCall = () => {
  const {axiosWithToken} =useAxios()
  
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();



  const getStockData = async (url) => {
    dispatch(fetchStart())
    try {
      const { data } = await axiosWithToken(
        `/stock/${url}/`,
      
      );
      dispatch(getStockSuccess({data,url}));
     
    } catch (error) {
      dispatch(fetchFail());
      
    }
  };




  const deleteStockData = async (url,id) => {
    dispatch(fetchStart())
    try {
     await axiosWithToken.delete(
        `/stock/${url}/${url}/${id}/`,
      
      );
      toastSuccessNotify("delete performed")
      getStockData(url)
     
    } catch (error) {
        toastErrorNotify("unsuccessfull")
      dispatch(fetchFail());
      console.log(error)
    }
  };

  return {getStockData,deleteStockData};
};

export default useStockCall;


// !Under code static version but if youi want to use more than 2 sections like here we can make parametric funtion  like getStockSuccess 

// const getFirms = async () => {
//     try {
//       const { data } = await axios(
//         `${import.meta.env.VITE_BASE_URL}/stock/firms/`,
//         {
//           headers: { Authorization: `Token ${token}` }, // Fix the typo here (headers instead of header)
//         }
//       );
//       dispatch(getFirmsSuccess(data));
     
//     } catch (error) {
//       dispatch(fetchFail());
//     }
//   };
