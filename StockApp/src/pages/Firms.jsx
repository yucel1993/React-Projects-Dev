import { Typography, Button, Grid } from "@mui/material"; // Add Button import
import { useEffect } from "react"; // Add useEffect import
import { useSelector } from "react-redux";
import useStockCall from "../hooks/useStockCall";
import FirmCard from "../components/FirmCard"

const Firms = () => {
  // ! I carried the below code to the useStockCall.jsx to make a custom code so here I will write this custom hook that calls the fuction that brings the firms to the Global state then call this state by writing useSelector
  const { getStockData } = useStockCall();
  const { firms } = useSelector((state) => state.stock);

  // const { token } = useSelector((state) => state.auth);
  //   const dispatch=useDispatch()
  // const getFirms = async () => {
  //   try {
  //     const { data } = await axios(`${import.meta.env.VITE_BASE_URL}/stock/firms/`, {
  //       headers: { Authorization: `Token ${token}` }, // Fix the typo here (headers instead of header)
  //     });
  //     dispatch(getFirmsSuccess(data))
  //     console.log(data);
  //   } catch (error) {
  //     dispatch(fetchFail())
  //   }
  // };

  useEffect(() => {
    getStockData("firms");
  }, []);
  console.log(firms);
  return (
    <>
      <Typography variant="h4" color={"error"} mb={3}>
        Firms
      </Typography>
      <Button variant="contained">NEW FIRM</Button>

      <Grid container justifyContent={"center"} gap={2}>
        {firms?.map((firm) => (
          <Grid key={firm.id} item>
            <FirmCard {...firm}/>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Firms;
