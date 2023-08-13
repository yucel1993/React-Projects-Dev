import { useEffect } from "react"
import { useSelector } from "react-redux"
import useStockCall from "../hooks/useStockCall"


const Purchases = () => {
  const {getStockData} =useStockCall()
  const {purchases}=useSelector((state)=>state.stock)
  useEffect(() => {
    
  getStockData("purchases")
    
  }, [])
  console.log(purchases)
  return (
    <div>Purchases</div>
  )
}

export default Purchases