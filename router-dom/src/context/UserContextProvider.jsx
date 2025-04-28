import React, { useState } from 'react'
import UserContext from "./UserContext"

function UserContextProvider({ children }) {
    const [user, setUser] = useState([])
    const [userBool, setUserBool] = useState(false)
    const [loggedUser, setLoggedUser] = useState({ username: "", password: "" })
    return (
        <UserContext.Provider value={{ user, setUser, userBool, setUserBool, loggedUser, setLoggedUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;