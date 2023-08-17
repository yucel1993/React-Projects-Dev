import { Button, Typography } from "@mui/material"
import ProductTable from "../components/ProductTable"
import ProductModal from "../components/ProductModal"
import { useState } from "react";
import useStockCall from "../hooks/useStockCall";
import { useEffect } from "react";


const Products = () => {
  const {getStockData}=useStockCall()
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    getStockData("products");
    getStockData("brands");
    getStockData("categories");
  }, []);

  return (
    <div>
         <Typography variant="h4" color={"error"} mb={3}>
        Products
      </Typography>
      <Button variant="contained" onClick={() => handleOpen()}>
        NEW PRODUCT
      </Button>
      <ProductModal
        open={open}
        handleClose={handleClose}
        
      />
      <ProductTable/>
    </div>
  )
}

export default Products