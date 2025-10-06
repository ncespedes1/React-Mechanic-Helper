import React from 'react'
import { useAuth } from '../contexts/AuthContext'

const HomeView = () => {

  const { mechanic, isAuthenticated } = useAuth();

  return (
    <div>
      
      <div className='welcome'>
        {isAuthenticated &&
                <h2>Welcome {mechanic.firstname} {mechanic.lastname}!</h2>
                }
      </div>
    </div>
  )
}

export default HomeView