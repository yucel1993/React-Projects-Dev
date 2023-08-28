import { useEffect } from "react"
import useStockCall from "../hooks/useStockCall"
import PurchaseModal from "../components/PurchaseModal"
import { useState } from "react";
import { Button, Typography } from "@mui/material";
import PurchaseCard from "../components/PurchaseCard";


const Purchases = () => {
  const {getAll} = useStockCall()
  const [info , setInfo ] = useState({
    firm_id:null,
    brand_id:null,
    product_id:null,
    quantity:null,
    price:null,
  })
  const [open, setOpen] =useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setInfo({
      firm_id:null,
      brand_id:null,
      product_id:null,
      quantity:null,
      price:null,
    })
    setOpen(false)};

    useEffect(() => {
     
      getAll("firms")  
      getAll("brands")  
      getAll("products")  
      getAll("purchases")  
    }, [])
    
  return (
    <div>
      <Typography mb={4} color="error" variant="h3" >PURCHASE</Typography>
      <Button  variant="contained" onClick={handleOpen}>Add Purchase</Button>
      <PurchaseModal info={info} setInfo={setInfo} open={open} handleClose={handleClose} />
      <PurchaseCard  handleOpen={handleOpen} setInfo={setInfo} />

    </div>
  )
}

export default Purchases