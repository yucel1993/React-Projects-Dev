import { useDispatch, useSelector } from "react-redux";
import { selectGenreOrCategory } from "../feature/genreOrCategorySlice";
import genreIcons from "../../assets/genres";
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
import { CallMissedSharp } from "@mui/icons-material";
import useMovieCall from "../hooks/useMovieCall";
import MovieList from "../MovieList/MovieList";
const MovieInformation = () => {
  const { id } = useParams();
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState([]);
  const { recommendation } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const { getRecommendation } = useMovieCall();
  console.log(recommendation);
  const getInfo = async (id) => {
    try {
      const { data } = await axios(
        `${BASE_URL}/movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`
      );

      setInfo(data);
    } catch (error) {
      console.log(error);
    }
  };
  const isMovieFavorited = true;
  const isMovieWatchListed = true;
  const addToFavorites = () => {};
  const addToWatchList = () => {};
  useEffect(() => {
    getInfo(id);
    getRecommendation({ list: "/recommendations", movie_id: id });
  }, [id]);
  console.log("INFO",info)
  return (
    <>
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
              {info?.spoken_languages?.length > 0
                ? `${info?.spoken_languages[0].name}`
                : ""}
            </Typography>
          </Grid>
          <Grid item className={classes.genresContainer}>
            {info?.genres?.map((genre, i) => (
              <Link
                key={i}
                className={classes.link}
                to="/"
                onClick={() => {
                  dispatch(selectGenreOrCategory(genre.id));
                }}
              >
                <img
                  src={genreIcons[genre.name.toLowerCase()]}
                  className={classes.genreImage}
                  height={30}
                  alt=""
                />
                <Typography color="textPrimary" variant="subtitle1">
                  {genre?.name}
                </Typography>
              </Link>
            ))}
          </Grid>
          <Typography variant="h5" gutterBottom style={{ marginTop: "10px" }}>
            Overview
          </Typography>
          <Typography style={{ marginBottom: "2px" }}>
            {info?.overview}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Top Cast
          </Typography>
          <Grid item container spacing={2}>
            {info &&
              info?.credits?.cast
                ?.map(
                  (characters, i) =>
                    characters.profile_path && (
                      <Grid
                        key={i}
                        item
                        xs={4}
                        md={2}
                        component={Link}
                        to={`/actors/${characters.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <img
                          className={classes.castImage}
                          src={`https:image.tmdb.org/t/p/w500/${characters.profile_path}`}
                          alt="character"
                        />
                        <Typography color="textPrimary">
                          {characters?.name}
                        </Typography>
                        <Typography color="textSecondary">
                          {characters?.character.split("/")[0]}
                        </Typography>
                      </Grid>
                    )
                )
                .slice(0, 6)}
          </Grid>
          <Grid item container style={{ marginTop: "2rem" }}>
            <div className={classes.buttons}>
              <Grid item xs={12} sm={6} className={classes.buttonsContainer}>
                <ButtonGroup size="small" variant="outlined">
                  <Button
                    target="_blank"
                    rel="noopener noreferrer"
                    href={info?.homepage}
                    endIcon={<Language />}
                  >
                    WebSite
                  </Button>
                  <Button
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://www.imdb.com/title/${info?.imdb_id}`}
                    endIcon={<MovieIcon />}
                  >
                    IMDb
                  </Button>
                  <Button onClick={() => setOpen(true)} href="#" endIcon={<Theaters />}>
                    Trailer
                  </Button>
                </ButtonGroup>

                <ButtonGroup size="small" variant="outlined">
                  <Button
                    onClick={addToFavorites}
                    endIcon={
                      isMovieFavorited ? (
                        <FavoriteBorderOutlined />
                      ) : (
                        <Favorite />
                      )
                    }
                  >
                    {isMovieFavorited ? "Unfavorite" : "Favorite"}
                  </Button>
                  <Button
                    onClick={addToWatchList}
                    endIcon={isMovieWatchListed ? <Remove /> : <PlusOne />}
                  >
                    {isMovieWatchListed ? "Watchlist" : "Add to Watch List"}
                  </Button>
                  <Button
                    endIcon={<ArrowBack />}
                    sx={{ borderColor: "primary.main" }}
                  >
                    <Typography
                      component={Link}
                      sx={{ textDecoration: "none" }}
                      to="/"
                      color="inherit"
                      variant="subtitle2"
                    >
                      Back
                    </Typography>
                  </Button>
                </ButtonGroup>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Box marginTop="5rem" width="100%">
        <Typography variant="h3" gutterBottom align="center">
          You also might like
        </Typography>
        {recommendation ? (
          <MovieList movies={recommendation} numberOfMovies={6} />
        ) : (
          <Box> Sorry, nothing was found.</Box>
        )}
      </Box>
      { info?.videos?.results?.length > 0 && <Modal
        closeAfterTransition
        className={classes.modal}
        open={open}
        onClose={() => setOpen(false)}
      >
        
          <iframe
            className={classes.video}
            title="Trailer"
            src={`https://www.youtube.com/embed/${info?.videos?.results[0]?.key}`}
            autoPlay
            allow="autoplay"
          />
        
      </Modal>}
      
    </>
  );
};

export default MovieInformation;
