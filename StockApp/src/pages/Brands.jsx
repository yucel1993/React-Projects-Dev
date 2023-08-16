import { Typography, Button, Grid } from "@mui/material"; // Add Button import
import { useEffect, useState } from "react"; // Add useEffect import
import { useSelector } from "react-redux";
import useStockCall from "../hooks/useStockCall";

import BrandsModal from "../components/BrandsModal";
import BrandsCard from "../components/BrandsCard";

const Brands = () => {
  // ! I carried the below code to the useStockCall.jsx to make a custom code so here I will write this custom hook that calls the fuction that brings the firms to the Global state then call this state by writing useSelector
  const { getStockData } = useStockCall();
  const { brands } = useSelector((state) => state.stock);
  const [info, setInfo] = useState({
    name: "",

    image: "",
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({ name: "", image: "" });
  };

  useEffect(() => {
    getStockData("brands");
  }, []);
  console.log(brands);
  return (
    <>
      <Typography variant="h4" color={"error"} mb={3}>
        Brands
      </Typography>
      <Button variant="contained" onClick={() => handleOpen()}>
        NEW FIRM
      </Button>
      <BrandsModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
      <Grid container justifyContent={"center"} gap={2}>
        {brands?.map((brand) => (
          <Grid key={brand.id} item>
            <BrandsCard handleOpen={handleOpen} setInfo={setInfo} {...brand} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Brands;
