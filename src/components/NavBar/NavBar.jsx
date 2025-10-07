import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './NavBar.css'

// import ThemeSwitch from '../ThemeSwitch';

const NavBar = () => {

    const navigate = useNavigate();
    const { logout, isAuthenticated } = useAuth();
    // const { darkMode, toggleTheme } = useTheme(); 

    const handleLogout = () => {
      logout();
      navigate('/')
    }

  return (
    // <header className={darkMode ? 'mainDark' : 'mainLight'}>
    <header>
      
      <nav>
        <h1 id='title'>My Mechanic Helper</h1>  
        <ul>
            <NavLink to='/'>HOME</NavLink>
            {isAuthenticated ? 
            <>
            <NavLink to='/profile'>PROFILE</NavLink>
            <NavLink to='/' onClick={handleLogout}>LOGOUT</NavLink>
            </>
            :
            <>
            <NavLink to='/login'>LOGIN</NavLink>
            <NavLink to='/register'>REGISTER</NavLink>
            
            </>
            }
            {/* <ThemeSwitch onClick={toggleTheme}/> */}
            
        </ul>
      </nav>
      <hr className='navbar-line' />
    </header>
  )
}

export default NavBar