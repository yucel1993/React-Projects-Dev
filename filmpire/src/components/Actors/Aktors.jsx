import React from "react";
import { useEffect, useState } from "react";
import { useParams,useNavigate  } from "react-router-dom";
import { Box, Button, Grid, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import axios from "axios";
import useStyle from "./styles";
import MovieList from "../MovieList/MovieList";
// import Pagination from "../Pagination/Pagination";
const tmdbApiKey = import.meta.env.VITE_APP_TMDB_KEY;

const BASE_URL = "https://api.themoviedb.org/3";
const page=1
const Aktors = () => {
  const { id } = useParams();
  const [actor, setActor] = useState([]);
  // const [page , setPage ] = useState(1)
  const [actorMovies , setActorMovies ] = useState([])
  const navigate = useNavigate();
  const classes = useStyle();


  const getActor = async (id) => {
    try {
      const { data } = await axios(
        `${BASE_URL}/person/${id}?api_key=${tmdbApiKey}`
      );
      setActor(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getActorMovie=async(id,page)=>{
    try {
      const { data } = await axios(
        `${BASE_URL}/discover/movie?with_cast=${id}&page=${page}&api_key=${tmdbApiKey}`
      );
      setActorMovies(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getActor(id);
    getActorMovie(id,page)
  }, []);
  console.log("actor", actor);
  console.log("actorsMovie", actorMovies);
  return (
    <>
      <Grid container spacing={3}>
        <Grid item lg={5} xl={4}>
          <img
            className={classes.image}
            src={`https://image.tmdb.org/t/p/w780/${actor?.profile_path}`}
            alt="actor"
          />
        </Grid>
        <Grid item lg={7} xl={8} style={{ justifyContent: "center" }}>
          <Typography variant="h2" gutterBottom>
            {actor?.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Born: {new Date(actor?.birthday).toDateString()}
          </Typography>
          <Typography variant="body2" paragraph align="justify">
            {actor?.biography || "Sory no biography yet ..."}
          </Typography>
          <Box
            marginTop="2rem"
            display={"flex"}
            justifyContent={"space-around"}
          >
            <Button
              variant="contained"
              color="primary"
              target="_blank"
              href={`https://www.imdb.com/name/${actor?.imdb_id}`}
            >
              IMDb
            </Button>
            <Button startIcon={<ArrowBack/>} onClick={()=>navigate(-1)}>Go Back</Button>
          </Box>
        </Grid>
      </Grid>
      <Box marginTop={"2rem o"}>
        <Typography variant="h2" gutterBottom align="center"> Movies</Typography>
        {actorMovies ? <MovieList movies={actorMovies} numberOfMovies={12} /> : ""}
        {/* <Pagination currentPage={page} setPage={setPage} totalPages={actorMovies?.total_pages} /> */}
      </Box>
    </>
  );
};

export default Aktors;
