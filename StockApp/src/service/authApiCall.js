// import axios from "axios";
// import { toastSuccessNotify } from "../helper/ToastNotify";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { fetchFail, fetchStart, loginSuccess } from "../features/authSlice";

// export const login = async(userData)=>{
//     const navigate=useNavigate()
//     const dispatch =useDispatch()
//     const BASE_URL="https://12272.fullstack.clarusway.com"
//     dispatch(fetchStart())
//     try {
//         const {data} =await axios.post(`${BASE_URL}/account/auth/login/`, userData)
        
//         dispatch(loginSuccess(data))
//         toastSuccessNotify("Login performed")
//         navigate("/stock")
//     } catch (error) {
//         console.log(error)
//         dispatch(fetchFail())
//     }
// }

// !We have created first in order to pull data from logonApi then we need to create a custom hook so we have done this in ../hooks/useAuthCall we have copied here and past in th ethis custopm hook then we define all usenavigate and usedispatch  in under the reactcompoent which is useCallAuth