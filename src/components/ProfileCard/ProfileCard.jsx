import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import './ProfileCard.css'
import { useTheme } from '../../contexts/ThemeContext';

const ProfileCard = () => {
  const { mechanic,  deleteMechanic } = useAuth();
  const navigate = useNavigate();
  const { darkMode } = useTheme(); 

  const handleDelete = () => {
     deleteMechanic();
     navigate('/')
  }

  return (
    <div className={darkMode ? 'container mainDark' : 'container mainLight'}>
      <div className='profile-card'>
        {/* <h1>Profile Page</h1> */}
        <h2 className='profile-name'>{mechanic?.firstname} {mechanic?.lastname}</h2>
        <div />
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <div className='profile-list'>
            <p>EMAIL: {mechanic?.email}</p>
            <p>SALARY: {mechanic?.salary}</p>
            <p>ADDRESS: {mechanic?.address}</p>
          </div>
          <div className='profile-buttons'>
            <button className='update-button' onClick={()=>navigate('/profile/update')}>Update</button>
            <button className='delete-button' onClick={()=>handleDelete()}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard