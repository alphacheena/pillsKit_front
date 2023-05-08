import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import ProtectedRoutes from "./Components/ProtectedRoutes";

import Homepage from "./Components/Homepage/Homepage";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
import Layout from "./Components/Layout/Layout";
import Kit from "./Components/Kit/Kit";
import Signup from "./Components/Signup/Signup";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("jwt")) {
      navigate("/login");
    }
  }, []);

  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="kit" element={<Kit />}></Route>
        </Route>
      </Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="signup" element={<Signup />}></Route>
    </Routes>
  );
}

export default App;
