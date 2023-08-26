import { useEffect } from "react"
import useStockCall from "../hooks/useStockCall"


const Purchases = () => {

const {getAll} = useStockCall()
    useEffect(() => {
     
      getAll("purchases")  
    }, [])
    
  return (
    <div>Purchases</div>
  )
}

export default Purchases