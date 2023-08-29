import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Modal from "@mui/material/Modal";
import { style } from "../GlobalStyles/styles";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useSelector } from "react-redux";
import useStockCall from "../hooks/useStockCall";

export default function SalesModal({ info, setInfo, open, handleClose }) {
    const {postAll,putAll} =useStockCall()
  const { brands, products } = useSelector((state) => state.stock);

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const quantity =parseInt(info.quantity)
    const updatedInfo={...info,quantity}
    info.id ?  putAll("sales",updatedInfo) : postAll("sales",updatedInfo)
    handleClose()
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit} >
            <FormControl fullWidth>
              <InputLabel id="brand">Brand</InputLabel>
              <Select
                labelId="brand"
                id="brand"
                label="brand"
                name="brand_id"
                value={info?.brand_id || ""}
                onChange={handleChange}
              >
                {brands.map((item, index) => (
                  <MenuItem key={index} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{marginTop:"1.2rem"}} >
              <InputLabel id="product">Product</InputLabel>
              <Select
               fullWidth
               
                labelId="product"
                id="product"
                label="product"
                name="product_id"
                value={info?.product_id || ""}
                onChange={handleChange}
              >
                {products.map((item, index) => (
                  <MenuItem key={index} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              fullWidth
              margin="normal"
              label="Quantity"
              variant="outlined"
              name="quantity"
              type="number"
              value={info?.quantity || ""}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Price"
              variant="outlined"
              name="price"
              type="number"
              value={info?.price || ""}
              onChange={handleChange}
            />

            <Button type="submit" fullWidth variant="contained">
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
