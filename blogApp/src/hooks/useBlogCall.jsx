import {
  fetchFail,
  fetchStart,
  getBlogsSuccess,
  getCategoriesSuccess,
  getCommentSlice,
  getUserSlice,
} from "../features/blogSlice";
import { useDispatch, useSelector } from "react-redux";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

import axios from "axios";

const useBlogCall = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { token, id } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // const { axiosWithToken } = useAxios()

  const getBlogData = async () => {
    // dispatch(fetchStart());
    try {
      const { data } = await axios.get(`${BASE_URL}/api/blogs/`);

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
      const { data } = await axios.get(`${BASE_URL}/api/categories/`);

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
      await axios.post(`${BASE_URL}/api/blogs/`, info, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      getBlogCategories();
      toastSuccessNotify("Performed well");
    } catch (error) {
      toastErrorNotify("Operation Failed");
      dispatch(fetchFail());
      console.log(info);
      console.log(error);
    }
  };

  const getUserBlogs = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(` ${BASE_URL}/api/blogs/?author=${id}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      console.log(data);
      dispatch(getUserSlice({ data }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const deleteBlog = async (id) => {
    console.log(id);
    dispatch(fetchStart());
    try {
      await axios.delete(
        `${BASE_URL}/api/blogs/${id}/`,

        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      getBlogData();
      toastSuccessNotify("Performed well");
    } catch (error) {
      toastErrorNotify("Operation Failed");
      dispatch(fetchFail());
      console.log(id);
      console.log(error);
    }
  };
  const updateBlog = async (info) => {
    console.log(id);
    dispatch(fetchStart());
    try {
      await axios.put(
        `${BASE_URL}/api/blogs/${info.id}/`,
        info,

        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      getBlogData();
      toastSuccessNotify("Updated well");
    } catch (error) {
      toastErrorNotify("Update Failed");
      dispatch(fetchFail());

      console.log(error);
    }
  };

  const getComments = async (id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(`${BASE_URL}/api/comments/${id}/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      dispatch(getCommentSlice({ data }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const createComment = async (id, info) => {
    const createdComment = { post: id, content: info };
    dispatch(fetchStart());
    try {
      await axios.post(`${BASE_URL}/api/comments/${id}/`, createdComment, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      getComments(id);
      getBlogData();
      toastSuccessNotify("Performed well");
    } catch (error) {
      toastErrorNotify("Operation Failed");
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const getRemoveLike = async (id,getBlog) => {
    console.log("Type of id:", typeof id);

    console.log(token);
    try {
       await axios.post(
        `${BASE_URL}/api/likes/${id}/`,
        {},
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        },
      );
    if(getBlog === true){
      getBlogData()
    }else {
      getBlog(id)
    }
    toastSuccessNotify("Performed well");
    } catch (error) {
      toastErrorNotify("Operation Failed");
      console.log(error);
    }
  };

  return {
    createBlog,
    getBlogData,
    getBlogCategories,
    getComments,
    createComment,
    deleteBlog,
    getUserBlogs,
    updateBlog,
    getRemoveLike,
  };
};

export default useBlogCall;
