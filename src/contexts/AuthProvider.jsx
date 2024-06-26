import React from 'react'
import { createContext } from 'react'
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext()
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //creat user

    const creatUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // creat user using gmail
    const signUpWithGmail = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    //login
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //signout
    const logout = () =>{
        return signOut(auth)
    }
    // user is available or not

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth , currentuser => {
            setUser(currentuser)
            setLoading(false)
        });
        return () => {
            return unsubscribe()
        }
    })
    
    
    
    const authInfo = {
        user,
        loading,
        creatUser,
        signUpWithGmail,
        login,
        logout

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider