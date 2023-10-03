import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route } from "react-router-dom";
import { Actors, MovieInformation, Movies, Navbar, Profile } from "./components";
import useStyles from "./components/styles";
// import useMovieCall from "./components/hooks/useMovieCall";
import useAlan from "./components/Alan";
import { useRef } from "react";


function App() {
 
  const classes= useStyles()
  const alanButtonContainer=useRef()

  useAlan()
  

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content} >
      <div className={classes.toolbar} />
        <Routes>
          <Route path="/movie/:id" element={<MovieInformation/>} />

          <Route path="/actors/:id" element={<Actors />} />

          <Route path="/" element={<Movies />} />
          
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
      <div ref={alanButtonContainer} />
    </div>
  );
}

export default App;
