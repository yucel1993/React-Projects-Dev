import { fetchFail, fetchStart, getStockSuccess } from "../features/stockSlice"
import { useDispatch } from "react-redux"
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"
import useAxios from "./useAxios"

const useStockCall = () => {

  const dispatch = useDispatch()
  const { axiosWithToken } = useAxios()

  const getStockData = async (url) => {
    dispatch(fetchStart())
    try {
      const { data } = await axiosWithToken(`/stock/${url}/`)
      dispatch(getStockSuccess({ data, url }))
      console.log(data)
    } catch (error) {
      dispatch(fetchFail())
      console.log(error)
    }
  }

  const deleteStockData = async (url, id) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.delete(`/stock/${url}/${id}/`) 
      toastSuccessNotify(`${url} succesfuly deleted`)
      getStockData(url)
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify(`${url} can not be deleted`)
      console.log(error)
    }
  }

  return { getStockData, deleteStockData }
}

export default useStockCall
