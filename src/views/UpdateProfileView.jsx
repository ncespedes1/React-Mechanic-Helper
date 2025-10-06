import React from 'react'
import { useAuth } from '../contexts/AuthContext';
import MechanicForm from '../components/MechanicForm/MechanicForm';

const UpdateProfileView = () => {
    const { updateMechanic } = useAuth();

  return (
    <div>
        <h3>Please update below! </h3>
        <MechanicForm submitFunction = {updateMechanic}/>
    </div>
  )
}

export default UpdateProfileView