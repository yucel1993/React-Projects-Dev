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

const BrandCard = ({ item, setInfo,handleOpen }) => {

    const {deleteAll} =useStockCall()
  return (
    <Grid item mt={4}>
      <Card
        sx={{
          width: 290,
          padding: "3rem",
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          alignContent:"space-between",
          textAlign:"center",
          alignItems: "center",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
         {item.name}
        </Typography>
        <CardMedia
          sx={{ height: 200,objectFit:"contain" }}
          image={item.image}
          title="green iguana"
          component={"img"}
        />
        <CardContent></CardContent>
        <CardActions >
          <EditIcon sx={btnStyle}
          onClick={()=>{
            setInfo(item)
            handleOpen()
          }}
          />
          <DeleteIcon onClick={()=>deleteAll("brands",item.id)}  sx={btnStyle}  />
        </CardActions>
      </Card>
    </Grid>
  );
};

export default BrandCard;
