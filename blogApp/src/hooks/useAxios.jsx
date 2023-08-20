import { useSelector } from "react-redux"
import axios from "axios"

const useAxios = () => {
  const { token } = useSelector((state) => state.auth)


  const axiosHeaderLogin = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}`,
    headers: { Cookie: "csrftoken=jmldpDHRYXhGENvzJoQTcnkPUv47Zdw5; sessionid=6o35hbr9fbkzor1r5wak4tes3q1q5wsb" },
  })

  const axiosWithToken = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}`,
    headers: { Authorization: `Token ${token}` },
  })

  const axiosPublic = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}`,
  })

  return { axiosWithToken, axiosPublic }
}

export default useAxios
