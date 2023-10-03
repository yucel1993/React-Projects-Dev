import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";


const PrivateRouter = () => {
//   const { currentUser } = useContext(AuthContext);
const currentUser=false
  return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRouter;