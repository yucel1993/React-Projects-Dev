import { useEffect } from "react";
import useStockCall from "../hooks/useStockCall";

import SalesModal from "../components/SalesModal";
import SalesTable from "../components/SalesTable";
import { useState } from "react";
import { Button, Typography } from "@mui/material";

const Sales = () => {
  const [info, setInfo] = useState({
    brand_id: 0,
    product_id: 0,
    quantity: 0,
    price: "string",
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({
      brand_id: 0,
      product_id: 0,
      quantity: 0,
      price: "string",
    });
  };
  const { getStockData } = useStockCall();

  useEffect(() => {
    getStockData("brands");
    getStockData("products");
    getStockData("sales");
  }, []);

  return (
    <div>
      <Typography variant="h4" color="error">
        Sales
      </Typography>
      <SalesModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
      <Button variant="contained" onClick={handleOpen}>
        New Sale
      </Button>
      <SalesTable handleOpen={handleOpen} setInfo={setInfo} />
    </div>
  );
};

export default Sales;
