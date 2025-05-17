import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar';
import "../index.css"
import { Outlet, Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer/Footer';
import LoginPopup from '../components/LoginPopup/LoginPopup';


const App = () => {
  const [showLogin, setShowLogin]= useState(false);
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}></Navbar>
      <Outlet></Outlet>
      
    </div>
    <Footer></Footer>
    </>
  )
}

export default App

