import { useDispatch, useSelector } from "react-redux";
import { fetchFail, fetchStart, getAllSuccess } from "../feature/stockSlice";
import axios from "axios";

import {toastSuccessNotify,toastErrorNotify} from "../helper/ToastNotify"

const useStockCall = () => {
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth);

    const getAll = async (url) => {
        dispatch(fetchStart());
        try {
            const { data } = await axios(`${BASE_URL}/stock/${url}/`, {
                headers: {
                    Authorization: `Token ${token}`
                }
            });
            dispatch(getAllSuccess({url,data}));
            toastSuccessNotify("Successfull ")
        } catch (error) {
            dispatch(fetchFail())
            console.log(error)
            toastErrorNotify("Delete Failed")
        }
    };



    const deleteAll = async (url,id) => {
        dispatch(fetchStart());
        try {
            await axios.delete(`${BASE_URL}/stock/${url}/`, {
                headers: {
                    Authorization: `Token ${token}`
                }
            });
            getAll(url)
        } catch (error) {
            dispatch(fetchFail())
            console.log(error)
        }
    };

    return { getAll,deleteAll };
};

export default useStockCall;
