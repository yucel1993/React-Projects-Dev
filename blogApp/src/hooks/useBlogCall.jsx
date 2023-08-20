import {
    fetchFail,
    fetchStart,
    getBlogsSuccess,
    getCategoriesSuccess,
    createMyBlog
  
  } from "../features/blogSlice"
  import { useDispatch, useSelector } from "react-redux"
  import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"

import axios from "axios"
  
  const useBlogCall = () => {
    const {token} =useSelector((state)=>state.auth)
    const dispatch = useDispatch()
    // const { axiosWithToken } = useAxios()
  
    const getBlogData = async () => {
      dispatch(fetchStart())
      try {
        const { data } = await axios.get('http://32272.fullstack.clarusway.com/api/blogs/');

        console.log(data)
        dispatch( getBlogsSuccess({data} ))
      } catch (error) {
        dispatch(fetchFail())
        console.log(error)
      }
    }

    // ? Getting the categories for lectbox items
    const getBlogCategories = async () => {
        dispatch(fetchStart())
        try {
          const { data } = await axios.get('http://32272.fullstack.clarusway.com/api/categories/',{
             Authorization:`Token ${token}`  
          });
  
          console.log(data)
          dispatch( getCategoriesSuccess({data} ))
        } catch (error) {
          dispatch(fetchFail())
          console.log(error)
        }
      }

      
      const createBlog = async (info) => {
        console.log(info);
        dispatch(fetchStart());
        try {
          const { data } = await axios.post(
            'http://32272.fullstack.clarusway.com/api/blogs/',
            info,
            {
              headers: {
                Authorization: `Token ${token}`  
              }
            }
          );
      
          dispatch(createMyBlog({ data }));
          toastSuccessNotify("Performed well");
        } catch (error) {
          toastErrorNotify("Operation Failed");
          dispatch(fetchFail());
          console.log(error);
        }
      };
      

  
    // const deleteStockData = async (url, id) => {
    //   dispatch(fetchStart())
    //   try {
    //     await axiosWithToken.delete(`/stock/${url}/${id}/`)
    //     toastSuccessNotify(`${url} succesfuly deleted`)
    //     getStockData(url)
    //   } catch (error) {
    //     dispatch(fetchFail())
    //     toastErrorNotify(`${url} can not be deleted`)
    //     console.log(error)
    //   }
    // }
  
    // const postStockData = async (url, info) => {
    //   dispatch(fetchStart())
    //   try {
    //     await axiosWithToken.post(`/stock/${url}/`, info)
    //     toastSuccessNotify(`${url} succesfuly posted`)
    //     getStockData(url)
    //   } catch (error) {
    //     dispatch(fetchFail())
    //     toastErrorNotify(`${url} can not be posted`)
    //     console.log(error)
    //   }
    // }
  
    // const putStockData = async (url, info) => {
    //   dispatch(fetchStart())
    //   try {
    //     await axiosWithToken.put(`/stock/${url}/${info.id}/`, info)
    //     toastSuccessNotify(`${url} succesfuly updated`)
    //     getStockData(url)
    //   } catch (error) {
    //     dispatch(fetchFail())
    //     toastErrorNotify(`${url} can not be updated`)
    //     console.log(error)
    //   }
    // }
    
    return {
        createBlog,
        getBlogData,
        getBlogCategories
    }
  }
  
  export default useBlogCall
  