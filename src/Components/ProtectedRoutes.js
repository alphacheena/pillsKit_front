import React from "react";
import { Outlet, Route, useNavigate } from "react-router-dom";
import Login from "./Login/Login";

const useAuth = () => {
  let flag = false;
  localStorage.getItem("jwt") ? (flag = true) : (flag = false);
  return flag;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();

  return isAuth ? <Outlet /> : <Login />;
};

export default ProtectedRoutes;
