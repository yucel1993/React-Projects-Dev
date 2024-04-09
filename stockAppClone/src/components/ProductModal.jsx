import * as React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { style } from "../GlobalStyles/styles";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useSelector } from "react-redux";
import useStockCall from "../hooks/useStockCall";
import { useEffect } from "react";

export default function ProductModal({ handleClose, open, info, setInfo }) {
  const { categories, brands } = useSelector((state) => state.stock);
  const { postAll } = useStockCall();

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postAll("products", info);
  };

  console.log(info);
  return (
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
            <InputLabel id="Firm Category">Firm Category</InputLabel>
            <Select
              id="Firm Category"
              fullWidth
              margin="normal"
              name="category_id"
              value={info?.category_id || ""}
              label="Firm Category"
              onChange={handleChange}
            >
              {categories.map((item, index) => (
                <MenuItem key={index} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="Firm Brand">Firm Brand</InputLabel>
            <Select
              id="Firm Brand"
              fullWidth
              margin="normal"
              name="brand_id"
              value={info?.brand_id || ""}
              label="Firm Brand"
              onChange={handleChange}
            >
              {brands.map((item, index) => (
                <MenuItem key={index} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            required
            label="Product Name"
            variant="outlined"
            name="name"
            value={info?.name || ""}
            onChange={handleChange}
          />

          <Button variant="contained" type="submit" fullWidth>
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
}
