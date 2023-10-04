import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ExitToApp } from "@mui/icons-material";
import RatedCards from "../RatedCards/RatedCards";
import { useSelector } from "react-redux";


const Profile = () => {
  const {favoriteMovies,watchListMovies} =useSelector((state)=>state.favoriteOrWatchList)
  const navigate = useNavigate();
  const handleClick = () => {
    logOut();
    navigate("/");
    localStorage.clear()
  };
  const { logOut } = useContext(AuthContext);
 
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
      <Typography variant="h4" gutterBottom >My Profile</Typography>
        <Button onClick={handleClick}>
          Log oUT &nbsp; <ExitToApp />
        </Button>
      </Box>
        {!favoriteMovies && !watchListMovies 
        ? <Typography variant="h5" >Add favorite or watchlist to see them</Typography>
        : (
          <Box>
            <RatedCards title="Favorite Movies" data={favoriteMovies}/>
            <RatedCards title="Watchlist" data={watchListMovies}/>
          </Box>
        ) }
    </Box>
  );
};

export default Profile;
