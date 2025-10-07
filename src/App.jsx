import { useState } from 'react'
import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import ProfileView from "./views/ProfileView";
import UpdateProfileView from "./views/UpdateProfileView";
import RegisterMechanicView from './views/RegisterMechanicView';
import './App.css'

import { useTheme } from "./contexts/ThemeContext"

function App() {
  const { darkMode } = useTheme();

  return (

    // <div  className={darkMode ? 'mainDark' : 'mainLight'}>
    <div id='appDiv' style={{backgroundColor: darkMode ? '#0a2232': '#d3e0eaff'}}>
    
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomeView/>}/>
          <Route path='/login' element={<LoginView/>}/>
          <Route path='/profile' element={<ProfileView/>}/>
          <Route path='/profile/update' element={<UpdateProfileView/>}/>
          <Route path='/register' element={<RegisterMechanicView/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
