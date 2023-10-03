import React from "react";
import {
  Box,
  CircularProgress,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import MovieList from "../MovieList/MovieList";
import { useEffect } from "react";
import useMovieCall from "../hooks/useMovieCall";
// import { selectGenreOrCategory } from "../feature/genreOrCategorySlice";
import { useState } from "react";
import Pagination from "../Pagination/Pagination";
const Movies = () => {
  const {genreIdOrCategoryName} =useSelector((state)=>state.genreOrCategory)
  const [page , setPage ] = useState(1)

  const lg =useMediaQuery((theme)=>theme.breakpoints.only("lg"))
  const numberOfMovies = lg ? 16 : 18;
  const { getMovies,getGenres } = useMovieCall();
  const { movies,loading } = useSelector((state) => state.movies);
  const {searchQuery} =useSelector((state)=>state.genreOrCategory)
 
  useEffect(() => {
    getMovies(genreIdOrCategoryName, page,searchQuery);
    getGenres();
  }, [genreIdOrCategoryName, page, searchQuery]);

  if (loading) { // Check the 'loading' property from the Redux state
    return (
      <Box display="flex" justifyContent={"center"}>
        <CircularProgress size="4rem" />
      </Box>
    );
  }
  if(!movies?.results?.length){
    return(
      <Box display={"flex"} alignItems={"center"} mt="20px" >
      <Typography variant="h4">No movies that match that name</Typography>
      <br />
      Please search for something else
      </Box>
    )
  }

 

  return (
    <div>
      <MovieList movies={movies} numberOfMovies={numberOfMovies}  />
      <Pagination currentPage={page} setPage={setPage}  totalPages={movies?.total_pages} />
    </div>
  );
};

export default Movies;
