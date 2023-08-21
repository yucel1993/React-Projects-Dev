import Dashboard from "../pages/Dashboard";
import Footers from "../components/Footers";
import NavBars from "../components/NavBars";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import About from "../pages/About";
import Login from "../components/auth/Login";
import PrivateRouter from "./PrivateRouter";
import BlogDetail from "../pages/BlogDetail";
import Register from "../components/auth/Register";
import MyBlog from "../pages/MyBlog";




const AppRouter = () => {
  return (
    <div>
      <NavBars />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="" element={<PrivateRouter />}>
          <Route path="/newblog" element={<NewBlog />} />
          <Route path="/detail/:id" element={<BlogDetail />} />
          <Route path="/myblog" element={<MyBlog />} />
        </Route>

        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footers />
    </div>
  );
};

export default AppRouter;
