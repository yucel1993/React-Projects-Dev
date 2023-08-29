import { useEffect } from "react"
import Chart from "../components/Chart"
import KpiCards from "../components/KpiCards"
import useStockCall from "../hooks/useStockCall"
import { Typography } from "@mui/material"

const Home = () => {
const {getAll} =useStockCall()

  useEffect(() => {
  getAll("sales")
  getAll("purchases")
  }, [])
  
    return <div>
       <Typography variant="h3" color="error" mb={2}>
        DASHBOARD
      </Typography>
      <KpiCards/>
      <Chart/>
    </div>
  }
  
  export default Home
  