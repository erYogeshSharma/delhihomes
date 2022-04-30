import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import HomePage from "../views/common/homePage/homePage";
import AuthPage from "../views/visitor/AuthPage";
import EditProfile from "../views/user/editProfile/EditProfile";
import Dashboard from "../views/common/dashboard/dashboard";
import Header from "../components/Header/Header";
import useStyles from "../views/visitor/styles";
import CreateProperty from "../views/user/createProperty/CreateProperty";

const Routers = () => {
  const classes = useStyles();
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <Header />

      <div className={classes.toolbar}> </div>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/:id" element={<Dashboard />} />
        <Route path="/auth" element={!isAuthenticated ? <AuthPage /> : <Navigate to="/" />} />
        <Route path="/create-property" element={<CreateProperty />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
