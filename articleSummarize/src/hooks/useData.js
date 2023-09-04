import { useDispatch, useSelector } from "react-redux";
import { fetchFail, fetchStart, getAllSuccess } from "../feature/dataSlice";
import axios from 'axios';


const useData=()=>{
    const dispatch=useDispatch()
    
    
    const getAll=async(search)=>{
       const API=import.meta.env.VITE_API_KEY
       
       try {
        const {data} =await axios(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API}`)
        console.log(data)
            dispatch(getAllSuccess(data.articles))
       } catch (error) {
        console.log(error)
       }



    }

    return { getAll};
};

export default useData;
