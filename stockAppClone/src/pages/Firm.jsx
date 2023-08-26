import { useEffect } from "react"
import useStockCall from "../hooks/useStockCall"


const Firm = () => {
const {getAll}=useStockCall()


    useEffect(() => {
     getAll("firms")
    }, [])
    

  return (
    <div>Firm</div>
  )
}

export default Firm