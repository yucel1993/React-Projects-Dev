import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/styles";
import useStyle from "./styles";
import { useSelector } from "react-redux";
import genreIcons from "../../assets/genres"
import { useDispatch } from "react-redux";
import { selectGenreOrCategory } from "../feature/genreOrCategorySlice";
import { useEffect } from "react";
import { useState } from "react";

const categories =[
  {label:"Popular", value: "Popular"},
  {label:"Top Rated", value: "top_rated"},
  {label:"Upcoming", value: "upcoming"},
]

const Sidebar = ({ setMobileOpen }) => {
  const [loading, setLoading] = useState(true); 
  const dispatch=useDispatch();
  const  {genres}=useSelector((state)=>state.movies)
  console.log(genres)
  const classes=useStyle()
  const theme = useTheme();
  const redLogo =
    "https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png";

  const blueLogo =
    "https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png";
  
    
 


  useEffect(() => {
    setMobileOpen(false)
    setTimeout(() => {
      setLoading(false);
    }, 3000); // 2000 milliseconds (2 seconds)
  }, [genres])
  
    return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === "light" ? redLogo :  blueLogo}
          alt="img"
        />
      </Link>
      <Divider/>
      <List>
        <ListSubheader>
          Categories
        </ListSubheader>
        {categories.map(({label,value})=>(
          <Link
          key={value}
          className={classes.links}
          to="/"
          >
          <ListItem
          onClick={()=>{dispatch(selectGenreOrCategory(value))}}
          button
          >
           <ListItemIcon>
            <img src={genreIcons[label.toLowerCase()]} 
            className={classes.genreImage}
            height={30}
             alt="" />
          </ListItemIcon> 
          <ListItemText primary={label} />

          </ListItem>

          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>
          Genres
        </ListSubheader>


        {loading ? (
      <Box display="flex" justifyContent={"center"}>
        <CircularProgress size="4rem" />
      </Box>
    ) : genres?.genres?.map(({name,id})=>(
          <Link
          key={id}
          className={classes.links}
          to="/"
          >
        
          <ListItem
          onClick={()=>{dispatch(selectGenreOrCategory(id))}}
          button
          >
          <ListItemIcon>
            <img src={genreIcons[name.toLowerCase()]} 
            className={classes.genreImage}
            height={30}
             alt="" />
          </ListItemIcon> 
          <ListItemText primary={name} />

          </ListItem>

          </Link>
        ))}
      </List>
    </>
  );
};

export default Sidebar;
