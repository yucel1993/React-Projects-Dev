import { Typography } from "@mui/material"
import KpiCards from "../components/KpiCards"
import Charts from "../components/Charts"
import useStockCall from "../hooks/useStockCall"
import { useEffect } from "react"


const Home = () => {
  const {getStockData}=useStockCall()

  useEffect(() => {
    getStockData("sales")
    getStockData("purchases")
  }, [])
  
  return (
    <div>
      <Typography variant="h4" color="error">
        Dashboard
      </Typography>
      <KpiCards/>
      <Charts/>
    </div>
  )
}

export default Home