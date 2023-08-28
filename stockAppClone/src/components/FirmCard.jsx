import { Grid } from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { btnStyle } from "../GlobalStyles/styles";
import useStockCall from "../hooks/useStockCall";
const FirmCard = ({ firm , handleOpen,setInfo }) => {
    const {deleteAll}=useStockCall()
  console.log(firm);
  return (
    <Grid item mt={2} >
      <Card
        sx={{
          width: 300,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "space-between",
          padding: "2rem",
          alignItems: "center",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {firm.name}
        </Typography>
        <Typography mb={2} variant="body2" color="text.secondary">
          {firm.address}
        </Typography>
        <CardMedia
          sx={{ height: 140, objectFit: "contain" }}
          image={firm.image}
          component={"img"}
        />
        <Typography mt={2} variant="h5" component={"p"} color="text.secondary">
          {firm.phone}
        </Typography>
        <CardContent></CardContent>
        <CardActions>
          <EditIcon sx={btnStyle} onClick={()=>{
            setInfo(firm)
            handleOpen()}} />
          <DeleteIcon onClick={()=>deleteAll("firms",firm.id)}  sx={btnStyle} />
        </CardActions>
      </Card>
    </Grid>
  );
};

export default FirmCard;
