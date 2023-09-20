import React from "react";
import {Navigate, Outlet} from "react-router-dom";

const ProtectedRoute = ({loggedIn, children}) => {

  return loggedIn ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedRoute;
