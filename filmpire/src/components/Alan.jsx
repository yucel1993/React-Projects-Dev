import alanBtn from "@alan-ai/alan-sdk-web";
import React, { useEffect, useContext } from "react";
import { ColorModeContext } from "../utills/ToggleColorMode";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom"
import { searchMovie, selectGenreOrCategory } from "./feature/genreOrCategorySlice";

const useAlan = () => {
  const { setMode } = useContext(ColorModeContext);
  const navigate =useNavigate()
  const dispatch=useDispatch()
  useEffect(() => {
    alanBtn({
      key: "d04f20f5cf0d9278af35fbd741bd43c52e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command, mode,genres,genreOrCategory,query }) => {
        if(command==="chooseGenre"){
            const foundGenre=genres.find((g)=>g.name.toLowerCase()===genreOrCategory.toLowerCase())
        if(foundGenre){
            navigate("/")
            dispatch(selectGenreOrCategory(foundGenre.id))
        }else{
            const category =genreOrCategory.startsWith("top") ? "top_rated" : genreOrCategory
            navigate("/")
            dispatch(selectGenreOrCategory(category))
        }
        }else if (command === "changeMode") {
          if (mode === "light") {
            setMode("light");
          } else {
            setMode("dark");
          }
        }else if(command === "search"){
            dispatch(searchMovie(query))
        }
      },
    });
  }, []);
};

export default useAlan;
