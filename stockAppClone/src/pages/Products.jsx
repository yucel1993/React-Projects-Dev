import { useState } from "react";
import ProductModal from "../components/ProductModal";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import useStockCall from "../hooks/useStockCall";
import ProductCard from "../components/ProductCard";
import { useEffect } from "react";

const Products = () => {
  const { getAll } = useStockCall();
  const [info, setInfo] = useState({
    name: "",
    category_id: null,
    brand_id: null,
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getAll("categories");
    getAll("brands");
    getAll("products");

  }, []);

  return (
    <div>
      <Typography color="error" variant="h3">
        PRODUCTS
      </Typography>
      <Button  sx={{marginTop:"2rem"}} variant="contained" onClick={handleOpen}>
        Add Product
      </Button>
      <ProductModal
    
      
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
      <ProductCard  />
    </div>
  );
};

export default Products;
