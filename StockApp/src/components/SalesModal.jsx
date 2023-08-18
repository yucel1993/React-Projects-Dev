import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ModalStyle } from "../styles/globalStyles";
import { useSelector } from "react-redux";
import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import useStockCall from "../hooks/useStockCall";

export default function SalesModal({ open, handleClose, info, setInfo }) {
  const { brands, products } = useSelector((state) => state.stock);
  const { postStockData,putStockData } = useStockCall();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Convert the 'quantity' value to an integer
    const intValue = name === "quantity" ? parseInt(value) : value;

    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: intValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(info);
    info.id ? putStockData("sales",info) :  postStockData("sales", info);
   
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => {
          setInfo({
            brand_id: 0,
            product_id: 0,
            quantity: 0,
            price: "string",
          });
          handleClose();
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalStyle}>
          <Box
            component="form"
            style={{ display: "flex", flexDirection: "column", gap: "4" }}
            onSubmit={handleSubmit}
          >
            <InputLabel id="brand">Brand</InputLabel>
            <Select
              id="brand"
              name="brand_id"
              label="brand"
              value={info.brand_id}
              onChange={handleChange}
            >
              {brands.map((item, key) => (
                <MenuItem key={key} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
            <InputLabel id="product">Product</InputLabel>
            <Select
              id="product"
              name="product_id"
              label="product"
              value={info.product_id}
              onChange={handleChange}
            >
              {products.map((item, key) => (
                <MenuItem key={key} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
            <InputLabel id="quantity">Quantity</InputLabel>
            <TextField
              id="quantity"
              type="number"
              name="quantity"
              value={info.quantity}
              onChange={handleChange}
            />
            <InputLabel id="price">Price</InputLabel>
            <TextField
              id="price"
              type="number"
              name="price"
              value={info.price}
              onChange={handleChange}
            />
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
