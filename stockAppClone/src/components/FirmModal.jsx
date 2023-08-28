import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { style } from '../GlobalStyles/styles';
import { FormControlLabel, TextField } from '@mui/material';
import { useState } from 'react';
import useStockCall from '../hooks/useStockCall';

export default function FirmModal({ open, handleClose,info,setInfo }) {
const {postAll,putAll} =useStockCall()

   
const handleChange=(e)=>{
setInfo({...info,[e.target.name]:e.target.value})
}

  const handleSubmit = (e) => {
    e.preventDefault();
    info.id ? putAll("firms",info) : postAll("firms",info)
    
    
    handleClose()
    // Handle form submission logic here
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
          Add Firm
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
          
            label="Firm Name"
            name="name"
           value={info?.name || ""}
           onChange={handleChange}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="phone"
            label="Firm Number"
            type="number"
            value={info?.phone || ""}
            onChange={handleChange}
           
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="address"
            label="Firm Address"
            type="text"
            value={info?.address || ""}
            onChange={handleChange}
           
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="image"
            label="Firm Image"
            type="url"
            value={info?.image || ""}
            onChange={handleChange}
           
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
}
