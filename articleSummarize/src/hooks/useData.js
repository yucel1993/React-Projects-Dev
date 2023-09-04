import { useDispatch, useSelector } from "react-redux";
import { fetchFail, fetchStart, getAllSuccess } from "../feature/dataSlice";
import axios from 'axios';


const useData=()=>{
    const dispatch=useDispatch()
    
    
    const getAll=async(url)=>{
        dispatch(fetchStart())
        const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
  params: {
    url: url,
    length: '3'
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
    'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
    dispatch(getAllSuccess(response?.summary));
} catch (error) {
	console.error(error);
}



    }

    return { getAll};
};

export default useData;
