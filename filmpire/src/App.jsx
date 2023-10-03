import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route } from "react-router-dom";
import {
  Actors,
  Login,
  MovieInformation,
  Movies,
  Navbar,
  PrivateRouter,
  Profile,
  Register,
} from "./components";
import useStyles from "./components/styles";
// import useMovieCall from "./components/hooks/useMovieCall";
import useAlan from "./components/Alan";
import { useRef } from "react";
import AuthContextProvider from "./context/AuthContext";
import { ToastContainer } from "react-toastify";

function App() {
  const classes = useStyles();
  const alanButtonContainer = useRef();

  useAlan();

  return (
    <div className={classes.root}>
      <AuthContextProvider>
      <ToastContainer />
        <CssBaseline />
        <Navbar />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Routes>
            <Route path="/movie/:id" element={<MovieInformation />} />

            <Route path="/actors/:id" element={<Actors />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/" element={<Movies />} />
            <Route element={<PrivateRouter />}>
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </main>
        <div ref={alanButtonContainer} />
      </AuthContextProvider>
    </div>
  );
}

export default App;
