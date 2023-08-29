import { Button, Typography } from "@mui/material";
import { useState } from "react";
import SalesModal from "../components/SalesModal";
import SalesCard from "../components/SalesCard";
import useStockCall from "../hooks/useStockCall";
import { useEffect } from "react";

const Sales = () => {
  const { getAll } = useStockCall();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setInfo({
      brand_id: null,
      product_id: null,
      quantity: null,
      price: null,
    })
    setOpen(false)};
  const [info, setInfo] = useState({
    brand_id: null,
    product_id: null,
    quantity: null,
    price: null,
  });

  useEffect(() => {
    getAll("sales");
    getAll("brands")
    getAll("products")
  }, []);

  return (
    <div>
      <Typography color="error" variant="h3">
        SALES
      </Typography>
      <Button
        sx={{ marginTop: "2rem" }}
        variant="contained"
        onClick={handleOpen}
      >
        Add Sales
      </Button>
      <SalesModal
        info={info}
        setInfo={setInfo}
        open={open}
        handleClose={handleClose}
      />
      <SalesCard handleOpen={handleOpen} setInfo={setInfo} />
    </div>
  );
};

export default Sales;
