import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../views/common/homePage/homePage";
import AuthPage from "../views/visitor/AuthPage";
import Header from "../components/Header/Header";
import Footer from '../components/footer/footer';
import EditProfile from '../views/user/editProfile/editProfile';
import Dashboard from '../views/common/Dashboard/dashboard';



const Routers = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
     

    return (
      <BrowserRouter>
      <Header/>
          <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path='/home'  element={<HomePage/>} />
            <Route path='/edit-profile' element = {<EditProfile/>}/>
            <Route path='/:email' element={<Dashboard/>}/>
            <Route path="/auth"   element={ !user ? <AuthPage/> : <Navigate to = "/" />  } />  
          </Routes>
    <Footer/>
      </BrowserRouter>
    )
}

export default Routers;
