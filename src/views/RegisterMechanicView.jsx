import React from 'react'
import MechanicForm from '../components/MechanicForm/MechanicForm'
import { useAuth } from '../contexts/AuthContext'

const RegisterMechanicView = () => {
  const { registerMechanic } = useAuth();

  return (
    <div>
      <h2>Please fill out the form below.</h2>
      <MechanicForm submitFunction = {registerMechanic}/>
    </div>
  )
}

export default RegisterMechanicView