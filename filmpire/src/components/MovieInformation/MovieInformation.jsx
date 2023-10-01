import React from "react";
import {
  Modal,
  Typography,
  Button,
  ButtonGroup,
  Grid,
  Box,
  CircularProgress,
  useMediaQuery,
  Rating,
} from "@mui/material";
import {
  Movie as MovieIcon,
  Theaters,
  Language,
  PlusOne,
  Favorite,
  FavoriteBorderOutlined,
  Remove,
  ArrowBack,
} from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
const tmdbApiKey = import.meta.env.VITE_APP_TMDB_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

import useStyle from "./styles.js";
import { useState } from "react";
const MovieInformation = () => {
  const { id } = useParams();
  const classes = useStyle();
  const [info, setInfo] = useState([]);

  const getInfo = async (id) => {
    try {
      const { data } = await axios(
        `${BASE_URL}/movie/${id}?append_to_response=vidoes,credits&api_key=${tmdbApiKey}`
      );
      console.log(data);
      setInfo(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(id)
  useEffect(() => {
    getInfo(id);
  }, [id]);
  console.log(info)
  return (
    <Grid className={classes.containerSpaceAround}>
      <Grid item sm={12} lg={4}>
        <img
          className={classes.poster}
          src={`https://image.tmdb.org/t/p/w500/${info?.poster_path}`}
          alt="poster"
        />
      </Grid>
      <Grid item container direction="column" lg={7}>
        <Typography variant="h3" align="center" gutterBottom>
          {/* {info?.title}({info?.release_date.split("-")[0]}) */}
        </Typography>
        <Typography variant="h5" align="center" gutterBottom>
          {info?.tagline}
        </Typography>
        <Grid item className={classes.containerSpaceAround}>
          <Box display="flex" align="center">
            <Rating readOnly value={info?.vote_average / 2} />
            <Typography
              variant="subtitle1"
              gutterBottom
              style={{ marginLeft: "10px" }}
            >
              {info?.vote_average} / 10{" "}
            </Typography>
          </Box>
          <Typography variant="h6" align="center">
            {info?.runtime}min{" "}
            {info?.spoken_languages.length > 0
              ? `${spoken_languages[0].name}`
              : ""}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MovieInformation;
