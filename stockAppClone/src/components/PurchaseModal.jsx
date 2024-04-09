import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { style } from "../GlobalStyles/styles";
import { useSelector } from "react-redux";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import useStockCall from "../hooks/useStockCall";

export default function PurchaseModal({ info, setInfo, open, handleClose }) {
  const { firms, brands, products } = useSelector((state) => state.stock);
  const { postAll, putAll } = useStockCall();

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const quantity = parseInt(info.quantity); //! Parse the quantity value to an integer
    const updatedInfo = { ...info, quantity }; //! Create a new object with the updated quantity

    info.id
      ? putAll("purchases", updatedInfo)
      : postAll("purchases", updatedInfo);

    handleClose();
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
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            <FormControl fullWidth>
              <InputLabel id="firm">Firm</InputLabel>
              <Select
                labelId="firm"
                id="demo-simple-select"
                label="Firm"
                name="firm_id"
                value={info?.firm_id?._id || ""}
                onChange={handleChange}
              >
                {firms.map((item, index) => (
                  <MenuItem key={index} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="brand">Brand</InputLabel>
              <Select
                labelId="brand"
                id="demo-simple-select"
                label="Brand"
                name="brand_id"
                value={info?.brand_id?._id || ""}
                onChange={handleChange}
              >
                {brands.map((item, index) => (
                  <MenuItem value={item.id}>{item.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="product">Product</InputLabel>
              <Select
                labelId="product"
                id="demo-simple-select"
                label="Brand"
                name="product_id"
                value={info?.product_id?._id || ""}
                onChange={handleChange}
              >
                {products.map((item, index) => (
                  <MenuItem value={item.id}>{item.name}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              id="outlined-number"
              label="Quantity"
              type="number"
              name="quantity"
              value={info?.quantity || null}
              onChange={handleChange}
            />
            <TextField
              id="outlined-number"
              label="Price"
              type="number"
              name="price"
              value={info?.price || null}
              onChange={handleChange}
            />
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
