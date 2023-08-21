import {
  fetchFail,
  fetchStart,
  getBlogsSuccess,
  getCategoriesSuccess,
 
  getCommentSlice,
} from "../features/blogSlice";
import { useDispatch, useSelector } from "react-redux";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

import axios from "axios";

const useBlogCall = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // const { axiosWithToken } = useAxios()

  const getBlogData = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get(
        "http://32272.fullstack.clarusway.com/api/blogs/"
      );

      console.log(data);
      dispatch(getBlogsSuccess({ data }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  // ? Getting the categories for lectbox items
  const getBlogCategories = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get(
        "http://32272.fullstack.clarusway.com/api/categories/",
        {
          Authorization: `Token ${token}`,
        }
      );

      console.log(data);
      dispatch(getCategoriesSuccess({ data }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const createBlog = async (info) => {
    console.log(info);
    dispatch(fetchStart());
    try {
      await axios.post(
        "http://32272.fullstack.clarusway.com/api/blogs/",
        info,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      getBlogCategories()
      toastSuccessNotify("Performed well");
    } catch (error) {
      toastErrorNotify("Operation Failed");
      dispatch(fetchFail());
      console.log(info);
      console.log(error);
    }
  };

  const getComments = async (id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(
        `http://32272.fullstack.clarusway.com/api/comments/${id}/`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      dispatch(getCommentSlice({ data }));
      
    } catch (error) {
      
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const createComment = async (id,info) => {
    const createdComment={ post:id,
    content: info}
    dispatch(fetchStart());
    try {
       await axios.post(
        `http://32272.fullstack.clarusway.com/api/comments/${id}/`,
        createdComment,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      getComments(id);
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
    getBlogCategories,
    getComments,
    createComment,
  };
};

export default useBlogCall;
