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

export default function FilmCard({
  id,
  name,
  phone,
  image,
  address,
  handleOpen,
  setInfo
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
        <Typography variant="body2" color="text.secondary">
          {address}
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
      <Typography variant="body" color="text.secondary">
        {phone}
      </Typography>
      <CardActions>
        <EditIcon
          sx={btnStyle}
          onClick={() => {
            setInfo({ id, name, phone, image, address });
            handleOpen();
          }}
        />
        <DeleteOutlineIcon
          sx={btnStyle}
          onClick={() => deleteStockData("firms", id)}
        />
      </CardActions>
    </Card>
  );
}
