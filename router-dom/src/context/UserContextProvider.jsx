import React, { useEffect, useState } from 'react'
import UserContext from "./UserContext"

function UserContextProvider({ children }) {

    const userData = () => {
        let data = localStorage.getItem('userData')
        const userData = data ? JSON.parse(data) : [];
        return userData
    }

    const [user, setUser] = useState(userData)
    const [userBool, setUserBool] = useState(false)
    const [themeBool, setThemeBool] = useState(localStorage.getItem('themeBoolean'))
    const [loggedUser, setLoggedUser] = useState({ username: "", password: "" })

    useEffect(() => {

        localStorage.setItem('themeBoolean', themeBool)
        localStorage.setItem('userData', JSON.stringify(user))

        console.log('localstorage', localStorage.getItem('themeBoolean'));
    }, [themeBool, user])

    return (
        <UserContext.Provider value={{ user, setUser, userBool, setUserBool, loggedUser, setLoggedUser, themeBool, setThemeBool }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;