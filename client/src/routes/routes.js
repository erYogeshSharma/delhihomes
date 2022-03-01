import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../views/common/homePage/homePage";
import AuthPage from "../views/visitor/AuthPage";
import EditProfile from "../views/user/editProfile/editProfile";
import Dashboard from "../views/common/Dashboard/dashboard";
import Header from "../components/Header/Header";
import useStyles from "../views/visitor/styles";

const Routers = () => {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <BrowserRouter>
      <Header />
      <div className={classes.toolbar}> </div>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/:email" element={<Dashboard />} />
        <Route path="/auth" element={!user ? <AuthPage /> : <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
