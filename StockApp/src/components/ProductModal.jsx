import * as React from "react";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Modal from "@mui/material/Modal";
import { ModalStyle } from "../styles/globalStyles";
import { Button, TextField } from "@mui/material";
import { useSelector } from "react-redux";

import useStockCall from "../hooks/useStockCall";
import { useState } from "react";

export default function ProductModal({ open, handleClose }) {
  const [info, setInfo] = useState({
    "name": "",
    "category_id": "",
    "brand_id":"" 
    });
  const { postStockData } = useStockCall();
  const {products,brands}=useSelector(state=>state.stock)

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postStockData("products", info);

    // setInfo({ name: "", address: "", tel: "", image: "" });     WE HAVE ALREADY DONE IN THE HANDLECLOSE FUNCTION IN FIRM COMPONENT
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
        <Box sx={ModalStyle}>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            component="form"
            onSubmit={handleSubmit}
          >
            <FormControl fullWidth>
              <InputLabel id="categories">Categories</InputLabel>
              <Select
                labelId="categories"
                id="categories"
                name="categories"
                value={info.category_id}
                label="categories"
                onChange={handleChange}
              >
               {products.map(({name,id})=>( <MenuItem key={id} value={id}>{name}</MenuItem>
              
              ))}</Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="brand">Brand</InputLabel>
              <Select
                labelId="brand"
                id="brand"
                name="brand"
                value={info.brand_id}
                label="brand"
                onChange={handleChange}
              >
                {brands.map(({name,id})=>( <MenuItem key={id} value={id}>{name}</MenuItem>
              
              ))}
              </Select>
            </FormControl>

            <TextField
              label="Product name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              required
              value={info?.name}
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
