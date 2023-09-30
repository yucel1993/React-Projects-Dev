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

const demoCategories =[
  {label:"Comedy", value: "comedy"},
  {label:"Action", value: "action"},
  {label:"Horror", value: "horror"},
  {label:"Animation", value: "animation"},
]

const categories =[
  {label:"Popular", value: "Popular"},
  {label:"Top Rated", value: "top_rated"},
  {label:"Upcoming", value: "upcoming"},
]

const Sidebar = ({ setMobileOpen }) => {
  const classes=useStyle()
  const theme = useTheme();
  const redLogo =
    "https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png";

  const blueLogo =
    "https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png";
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
          onClick={()=>{}}
          button
          >
          {/* <ListItemIcon>
            <img src={redLogo} 
            className={classes.genreImages}
            height={30}
             alt="" />
          </ListItemIcon> */}
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
        {demoCategories.map(({label,value})=>(
          <Link
          key={value}
          className={classes.links}
          to="/"
          >
        
          <ListItem
          onClick={()=>{}}
          button
          >
          {/* <ListItemIcon>
            <img src={redLogo} 
            className={classes.genreImages}
            height={30}
             alt="" />
          </ListItemIcon> */}
          <ListItemText primary={label} />

          </ListItem>

          </Link>
        ))}
      </List>
    </>
  );
};

export default Sidebar;
