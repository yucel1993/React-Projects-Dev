import { Typography, Button, Grid } from "@mui/material"; // Add Button import
import { useEffect, useState } from "react"; // Add useEffect import
import { useSelector } from "react-redux";
import useStockCall from "../hooks/useStockCall";
import FirmCard from "../components/FirmCard";
import FirmModal from "../components/FirmModal";

const Firms = () => {
  // ! I carried the below code to the useStockCall.jsx to make a custom code so here I will write this custom hook that calls the fuction that brings the firms to the Global state then call this state by writing useSelector
  const { getStockData } = useStockCall();
  const { firms } = useSelector((state) => state.stock);
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({ name: "", phone: "", address: "", image: "" });
  };

  useEffect(() => {
    getStockData("firms");
  }, []);
  console.log(firms);
  return (
    <>
      <Typography variant="h4" color={"error"} mb={3}>
        Firms
      </Typography>
      <Button variant="contained" onClick={() => handleOpen()}>
        NEW FIRM
      </Button>
      <FirmModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
      <Grid container justifyContent={"center"} gap={2}>
        {firms?.map((firm) => (
          <Grid key={firm.id} item>
            <FirmCard handleOpen={handleOpen} setInfo={setInfo} {...firm} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Firms;
