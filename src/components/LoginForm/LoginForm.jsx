import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate, Link } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import './LoginForm.css'

const LoginForm = () => {

    const [email, setEmail] =useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        // console.log(`PASSING ${email} and {password} to login`)
        setError(false)
        setLoading(true)
        event.preventDefault()

        const loggedIn = await login(email, password)
        setLoading(false)
        if (loggedIn){
            navigate('/')
        } else {
            setError(true)
        }
    }

    const errorMessage = () => {
        return (
            <div  className='errorStatus' style={{display: error ? "" : "none"}}>
                <h4>Incorrect login data.</h4>
            </div>
        )
    }
    

  return (
    <div>
        <form  className='login-form' onSubmit={(e)=>handleSubmit(e)}>

            <input 
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            placeholder='your@email.com'
            type="email" 
            required/>

            <input 
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            placeholder='abc123'
            type="password" 
            required/>

            <button type='submit'>Submit</button>
            {loading && 
            <div>
                <CircularProgress className='loading' color=''/>
                <p>Loading... One moment please!</p>
            </div>
            }
            {errorMessage()}
            {/* <CircularProgress className='loading' color=''/>
            <p>Loading... One moment please!</p> */}
        </form>

        <p className='sign-up'>
            Don't have an account? <Link to='/register'>Sign-up here</Link>
        </p>

    </div>
  )
}

export default LoginForm