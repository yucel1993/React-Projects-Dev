import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Modal from "@mui/material/Modal";
import { style } from "../GlobalStyles/styles";
import { TextField, Typography } from "@mui/material";

import useStockCall from "../hooks/useStockCall";

export default function BrandModal({ open, handleClose,info,setInfo }) {
 const {postAll,putAll} =useStockCall()

  const handleChange = (e) => {
    setInfo({...info,[e.target.name]:e.target.value})
  };

  const handleSubmit = () => {
    info.id ? putAll("brands",info) : postAll("brands",info)
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
      <Typography textAlign={"center"} id="modal-modal-title" variant="h6" component="h2">
          Add Brand
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Firm name"
            margin="normal"
            fullWidth
            type="text"
            name="name"
            value={info.name || ""}
            onChange={handleChange}
          />
          <TextField
            label="Firm url"
            margin="normal"
            fullWidth
            type="url"
            name="image"
            value={info.image || ""}
            onChange={handleChange}
          />

          <Button fullWidth variant="contained" type="submit">Submit</Button>
        </form>
      </Box>
    </Modal>
  );
}
