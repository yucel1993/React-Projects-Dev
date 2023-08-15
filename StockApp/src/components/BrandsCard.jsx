import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { Typography } from "@mui/material";
import { btnStyle } from "../styles/globalStyles";
import useStockCall from "../hooks/useStockCall";

export default function BrandsCard({
  id,
  name,
  
  image,
 
  handleOpen,
  setInfo,
}) {
  const { deleteStockData } = useStockCall();
  return (
    <Card
      sx={{
        width: "300px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image}
        sx={{
          p: 1,
          height: 140,
          objectFit: "contain",
        }}
      />

      <CardActions>
        <EditIcon
          sx={btnStyle}
          onClick={() => {
            setInfo({ id, name, image });
            handleOpen();
          }}
        />
        <DeleteOutlineIcon
          sx={btnStyle}
          onClick={() => deleteStockData("brands", id)}
        />
      </CardActions>
    </Card>
  );
}
