import * as React from "react";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import { ModalStyle } from "../styles/globalStyles";
import { Button, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import useStockCall from "../hooks/useStockCall";

export default function PurchaseModal({ handleClose, open, info, setInfo }) {
  const {postStockData,putStockData}=useStockCall()
  const { firms, brands, products } = useSelector((state) => state.stock);
  const handleChange = (e) => {
    const { name, value } = e.target;

  // Convert the 'quantity' value to an integer
  const intValue = name === 'quantity' ? parseInt(value) : value;

  setInfo((prevInfo) => ({
    ...prevInfo,
    [name]: intValue,
  }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(info)
    info.id ? putStockData("purchases",info) : postStockData("purchases", info)
    
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={()=>{
          setInfo({
            firm_id: 1,
            brand_id: 3,
            product_id: 3,
            quantity: 0,
            price: "string",
          })
          handleClose()}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalStyle}>
          <Box
            component="form"
            style={{ display: "flex", flexDirection: "column", gap: 4 }}
            onSubmit={handleSubmit}
          >
            <InputLabel id="firm">Firm</InputLabel>
            <Select
            
              id="firm"
              name="firm_id"
              value={info.firm_id}
              label="firm"
              onChange={handleChange}
            >
              {firms.map((item, key) => (
                <MenuItem key={key} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
            <InputLabel id="brand">Brand</InputLabel>
            <Select
            
              id="brand"
              name="brand_id"
              value={info.brand_id}
              label="brand"
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
              value={info.product_id}
              label="product"
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
