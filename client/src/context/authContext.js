import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user' || null)));

    const login = async (logUser) => {
       const loggedUser = await axios.post('http://localhost:8800/login', logUser, {withCredentials: true})
       setCurrentUser(loggedUser.data)
    }

    const logout = async () => {
       const loggedUser = await axios.post('http://localhost:8800/logout', {withCredentials: true})
       setCurrentUser(null)
    }


    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser));
      }, [currentUser])

     

    return (
        <AuthContext.Provider value={{currentUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    )

}