import { useEffect } from "react";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import FirmModal from "../components/FirmModal";
import FirmCard from "../components/FirmCard";

const Firm = () => {
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    image: "",
    address: "",
  });
  const { getAll } = useStockCall();
  const { firms } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({ name: "", phone: "", image: "", address: "" });
  };

  useEffect(() => {
    getAll("firms");
  }, []);

  return (
    <div>
      <Typography mb={2} variant="h3" color="error">
        FIRMS
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        Add Firms
      </Button>
      <FirmModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
      <Grid container spacing={2} justifyContent={"center"}>
        {firms.map((firm, index) => (
          <FirmCard
            key={index}
            item
            firm={firm}
            handleOpen={handleOpen}
            setInfo={setInfo}
            xs={8}
          />
        ))}
      </Grid>
    </div>
  );
};

export default Firm;
