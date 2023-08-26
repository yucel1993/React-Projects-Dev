import { Button, Typography } from "@mui/material"
import { useState } from "react";
import BrandModal from "../components/BrandModal";


const Brand = () => {
    const [open, setOpen] =useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <div>
        <Typography variant="h3" color="error"> BRANDS</Typography>
        <Button sx={{marginTop:"2rem"}}  variant="contained" onClick={handleOpen}>Add Brand</Button>
        <BrandModal open={open} handleClose={handleClose} />
    </div>
  )
}

export default Brand