import { Button, Grid, Typography } from "@mui/material"
import { useState } from "react";
import BrandModal from "../components/BrandModal";
import BrandCard from "../components/BrandCard";
import useStockCall from "../hooks/useStockCall";
import { useEffect } from "react";
import { useSelector } from "react-redux";


const Brand = () => {
  const {brands} =useSelector((state)=>state.stock)
  const {getAll} =useStockCall()
  const [info, setInfo] = useState({
    name: "",
    image: "",
  });
    const [open, setOpen] =useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
      setInfo({
        name: "",
        image: "",
      })
      setOpen(false)};

  useEffect(() => {
    getAll("brands")
  }, [])
  

  return (
    <div>
        <Typography variant="h3" color="error"> BRANDS</Typography>
        <Button sx={{marginTop:"2rem"}}  variant="contained" onClick={handleOpen}>Add Brand</Button>
        <BrandModal open={open} handleClose={handleClose} info={info} setInfo={setInfo} />

        <Grid container spacing={2} justifyContent={"center"}>
      {
        brands.map((item,index)=>{
          return <BrandCard item={item} key={index} setInfo={setInfo} handleOpen={handleOpen} />
        })
      }
        </Grid>
       
    </div>
  )
}

export default Brand