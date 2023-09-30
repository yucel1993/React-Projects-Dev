import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, getMoviesSuccess } from "../feature/movieSlice";

const useMovieCall = () => {
  const dispatch = useDispatch();
  const tmdbApiKey = import.meta.env.VITE_APP_TMDB_KEY;
  const page = 1;

  const getMovies = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(
        `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=${tmdbApiKey}`
        );
        console.log(data)
      dispatch(getMoviesSuccess( {data} ));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  return { getMovies };
};

export default useMovieCall;
