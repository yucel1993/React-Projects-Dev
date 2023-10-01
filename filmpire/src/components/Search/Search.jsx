import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import useStyles from "./styles";
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from "react-redux";
import { searchMovie } from "../feature/genreOrCategorySlice";
import { useState } from "react";

const Search = () => {
    const dispatch=useDispatch()
  const [query, setQuery] = useState("");
  const classes = useStyles();
  const handlePress = (event) => {
    if (event.key === "Enter") {
        dispatch(searchMovie(query))
    
    }
  };
  return (
    <div className={classes.searchContainer}>
      <TextField
        onKeyDown={handlePress}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"
        InputProps={{
          className: classes.input,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default Search;
