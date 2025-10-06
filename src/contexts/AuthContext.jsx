import React, { createContext, useContext, useState, useEffect } from 'react'



//Make Context
const AuthContext = createContext();

//make custom hook
export const useAuth = () => {
    const context = useContext(AuthContext);

    return context
}

//make provider
export const AuthProvider = ({ children }) =>{
    const [token, setToken] = useState(null)
    const [mechanic, setMechanic] = useState(null)

    useEffect(()=> {
        const savedToken = localStorage.getItem('token')
        const savedMechanic = localStorage.getItem('mechanic')

        setToken(savedToken)
        const mechanicData = JSON.parse(savedMechanic)
        setMechanic(mechanicData)
    },[])


    //======================functions========================


    const login = async (email, password) =>{
        const response = await fetch('https://my-mechanic-helper.onrender.com/mechanics/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })

        // console.log(response)
        if (response.status == 200){

            const loginData = await response.json()
       
            setToken(loginData.token)
            setMechanic(loginData.mechanic)
            localStorage.setItem('token', loginData.token)
            localStorage.setItem('mechanic', JSON.stringify(loginData.mechanic))

            return true
        } else {
            return false
        }  

    }

    const updateMechanic = async (updateData) => {
        const response = await fetch('https://my-mechanic-helper.onrender.com/mechanics', {
            method: 'PUT',
            headers: {
                 'Content-Type': 'application/json',
                 'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(updateData)
        })

        if (response.status == 200){
            const updatedMechanicData = await response.json()
            setMechanic(updatedMechanicData)
            localStorage.setItem('mechanic', JSON.stringify(updatedMechanicData))

            return true
        } else {
            return false
        }

        
    }

    const registerMechanic = async (registerData) => {
        const response = await fetch('https://my-mechanic-helper.onrender.com/mechanics', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerData)
        })

        if (response.status == 201){
            const responseData = await response.json()
            console.log(responseData)

            return true
        } else {
            return false
        }
        
    }


    const logout = () => {
        setToken('')
        setMechanic('')
        localStorage.removeItem('token')
        localStorage.removeItem('mechanic')
    }


    const deleteMechanic = async () => {
        const response = await fetch('https://my-mechanic-helper.onrender.com/mechanics', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })

        const responseData = await response.json();
        console.log(responseData);
        logout();
    }
    






     const value = {
        token,
        mechanic,
        updateMechanic,
        registerMechanic,
        deleteMechanic,
        login,
        logout,
        isAuthenticated: token ? true : false
    }

    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )

}

