import * as React from "react";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import { ModalStyle } from "../styles/globalStyles";
import { Button, TextField } from "@mui/material";

import useStockCall from "../hooks/useStockCall";

export default function FirmModal({ open, handleClose, info, setInfo }) {
  const { postStockData, putStockData } = useStockCall();

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    info.id ? putStockData("firms", info) : postStockData("firms", info);

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
            <TextField
              label="Firm name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              required
              value={info?.name}
              onChange={handleChange}
            />

            <TextField
              label="Firm number"
              name="phone"
              id="phone"
              type="tel"
              variant="outlined"
              required
              value={info?.phone}
              onChange={handleChange}
            />

            <TextField
              label="Firm address"
              name="address"
              id="address"
              type="text"
              required
              variant="outlined"
              value={info?.address}
              onChange={handleChange}
            />

            <TextField
              label="Firm image"
              name="image"
              id="image"
              type="url"
              variant="outlined"
              required
              value={info?.image}
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
