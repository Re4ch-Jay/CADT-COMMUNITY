import { useState, useEffect, createContext } from "react";
import { auth, googleProvider,  } from "../firebase";
import { signInWithPopup, signOut } from 'firebase/auth';
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'))

    const navigate = useNavigate()

    useEffect(() => {
        if(!isAuth) return navigate("/")
        if(isAuth) {
            setLoading(false);
            navigate('/chats')
        }
    }, [navigate, isAuth])

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider)
            setIsAuth(true)
            localStorage.setItem('isAuth', true)
            navigate('/chats')
        } catch (error) {
            console.log(error)
        }
   }
   
  const logout = () => {
    signOut(auth).then(res => {
      localStorage.clear()
      console.log(res)
      navigate('/')
    })
  }

    return (
        <AuthContext.Provider value={{loading, signInWithGoogle, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
