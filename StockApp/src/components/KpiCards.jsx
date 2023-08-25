import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentsIcon from "@mui/icons-material/Payments";
import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";
import { deepPurple, pink, amber } from "@mui/material/colors";
import { useSelector } from "react-redux";

const KpiCards = () => {
  const { sales, purchases } = useSelector((state) => state.stock)

  const totalSales = sales
    ?.map((item) => Number(item.price_total))
    .reduce((acc, sale) => acc + sale, 0)

  const totalPurchases = (purchases
    ?.map((item) => Number(item.price_total))
    .reduce((acc, sale) => acc + sale, 0))
    
  const cardData = [
    {
      id: 1,
      icon: <MonetizationOnIcon sx={{ fontSize: "2rem" }} />,
      bgColor: deepPurple[200],
      color: deepPurple[700],
      title: "sales",
      value: `$${totalSales}`,
    },
    {
      id: 1,
      icon: <ShoppingCartIcon sx={{ fontSize: "2rem" }} />,
      bgColor: pink[200],
      color: pink[700],
      title: "profit",
      value: `$${totalSales -totalPurchases  }`,
    },
    {
      id: 1,
      icon: <PaymentsIcon sx={{ fontSize: "2rem" }} />,
      bgColor: amber[200],
      color: amber[700],
      title: "purchases",
      value: `$${totalPurchases}`,
    },
  ];
  return (
    <div>
      <Grid container sx={{justifyContent:"center"}} spacing={2}>
        {cardData.map((item, i) => (
          <Grid item key={i}>
            <Paper  elevation={5} sx={{ gap:3,display:"flex",paddingTop:"1rem ",padding:"1rem"}}>
              <Avatar sx={{ bgcolor: item.bgColor, color: item.color,width:"70px",height:"70px",justifyContent:"center", padding:"1rem" }}>
                {item.icon}
              </Avatar>
              <Box>
                <Typography variant="button" mb={2}>
                  {item.title}
                </Typography>
                <Typography variant="h4" color="error" mb={2}>
                  {item.value}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default KpiCards;
