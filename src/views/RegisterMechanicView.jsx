import React from 'react'
import MechanicForm from '../components/MechanicForm/MechanicForm'
import { useAuth } from '../contexts/AuthContext'

// import { useTheme } from "./contexts/ThemeContext"


const RegisterMechanicView = () => {
  const { registerMechanic } = useAuth();
  // const { darkMode } = useTheme();

  return (
    <div>
      <h2>Please fill out the form below.</h2>
      <MechanicForm submitFunction = {registerMechanic}/>
    </div>
  )
}

export default RegisterMechanicView