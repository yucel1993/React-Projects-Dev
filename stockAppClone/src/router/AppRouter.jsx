import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";

import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Purchases from "../pages/Purchases";
import Brand from "../pages/Brand";
import Firm from "../pages/Firm";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/stock" element={<PrivateRouter />}>
          <Route path="" element={<Dashboard />}>
            <Route index element={<Home />}/>
            <Route path="purchases" element={<Purchases />}/>
            <Route path="brands" element={<Brand />}/>
            <Route path="firms" element={<Firm />}/>

          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default AppRouter;
