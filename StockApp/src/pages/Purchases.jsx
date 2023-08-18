import { useEffect } from "react";
import { useSelector } from "react-redux";
import useStockCall from "../hooks/useStockCall";
import { Button, Typography } from "@mui/material";
import PurchaseModal from "../components/PurchaseModal";
import { useState } from "react";
import PurchaseTable from "../components/PurchaseTable";

const Purchases = () => {
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({
    firm_id: 0,
    brand_id: 0,
    product_id: 0,
    quantity: 0,
    price: "string",
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({
      firm_id: 0,
      brand_id: 0,
      product_id: 0,
      quantity: 0,
      price: "string",
    });
  };
  const { getStockData } = useStockCall();
  const { purchases } = useSelector((state) => state.stock);
  useEffect(() => {
    getStockData("purchases");
    getStockData("firms");
    getStockData("brands");
    getStockData("products");
    getStockData("purchases");
  }, []);

  return (
    <div>
      <Typography variant="h4" color={"error"} mb={3}>
        Purchases
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        Add Purchase
      </Button>
      <PurchaseModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
      <PurchaseTable setInfo={setInfo} handleOpen={handleOpen} />
    </div>
  );
};

export default Purchases;
