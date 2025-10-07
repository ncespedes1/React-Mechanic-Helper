import React from 'react'
import { useState } from 'react'
import './MechanicForm.css'
import { CircularProgress } from '@mui/material'
import { useTheme } from '../../contexts/ThemeContext';

const MechanicForm = ({ submitFunction }) => {

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        salary: '',
        address: ''
    })

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const { darkMode } = useTheme(); 

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData(prevData => ({...prevData, [name]:value}))
    }

    const handleSubmit = async (e) => {
        setError(false)
        setLoading(true)
        e.preventDefault()
        
        //if it works, send to profile, if not then set error to true

        const sentInfo = await submitFunction(formData)
        setLoading(false)
        if (sentInfo){
            setSuccess(true)
        } else {
            setError(true)
        }
    }

    const errorMessage = () => {
        return (
            <div  className='errorStatus' style={{display: error ? "" : "none"}}>
                <h4>Please try again.</h4>
            </div>
        )
    }

    const successMessage = () => {
        return (
            <div  className='successStatus' style={{display: success ? "" : "none"}}>
                <h4>Success!</h4>
            </div>
        )
    }



  return (
    <div className={darkMode ? 'container mainDark' : 'container mainLight'}>

      <form onSubmit={(e)=> {handleSubmit(e)}} id='mechForm'>
        <div>
            <label htmlFor="firstname">First name: </label>
            <input type="firstname" name='firstname' placeholder='firstname' onChange={(e)=>handleChange(e)} value={formData.firstname} required/>
        </div>

        <div>
            <label htmlFor="lastname">Last name:</label>
            <input type="lastname" name='lastname' placeholder='lastname' onChange={(e)=>handleChange(e)} value={formData.lastname} required/>
        </div>

        <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name='email' placeholder='email' onChange={(e)=>handleChange(e)} value={formData.email} required/>
        </div>

        <div>
            <label htmlFor="password">Password:</label>
            <input type="password" name='password' placeholder='password' onChange={(e)=>handleChange(e)} value={formData.password} required/>
        </div>

        <div>
            <label htmlFor="salary">Salary:</label>
            <input type="salary" name='salary' placeholder='salary' onChange={(e)=>handleChange(e)} value={formData.salary} required/>
        </div>

        <div>
            <label htmlFor="address">Address:</label>
            <input type="address" name='address' placeholder='address' onChange={(e)=>handleChange(e)} value={formData.address} required/>
        </div>

        <button type='submit' style={{backgroundColor: darkMode ? 'rgb(107, 207, 260, 0.2)': '#336388ff'}}>Submit</button>

        {loading && 
            <div>
                <CircularProgress />
                <p>Loading. One moment please!</p>
            </div>
        }
        {errorMessage()}
        {successMessage()}

      </form>
    
    </div>
  )
}

export default MechanicForm