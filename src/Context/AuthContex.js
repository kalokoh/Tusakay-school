import React, { useEffect} from 'react'
import {useState} from 'react'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail} from 'firebase/auth'
import { auth } from '../firebase-config'

const Contxt = React.createContext({
    signUpUser: (email, password) =>{},
    signInUser: (email, password) =>{},
    signOutUser: () =>{},
    user: '',
    googleSignIn: () =>{},
    passwordReset: (email)=>{},
    storeToken: (token)=>{},
    clearToken: ()=>{},
})



export const AuthContex = ({children}) => {
    const initialToken = localStorage.getItem('token')
    const [currentUser, setCurrentUser] = useState(initialToken)

    const signWithGoogle = () =>{
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }

    const signUp = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) =>{
        loginHandler(currentUser)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () =>{
        return signOut(auth)
    }

    const passwordReset = (email) =>{
        return sendPasswordResetEmail(auth, email, {url: 'http://localhost:3001/teachers/login'})
    }

    useEffect(() => {
        const onSubcribe = onAuthStateChanged(auth, (currentUser) =>{
            setCurrentUser(currentUser)
            if(currentUser){
                console.log(currentUser.email)
            }else{
                console.log('User is not sign in')
            }
        })
        return () =>{
            onSubcribe();
        }
    }, [])

    const loginHandler = (token) =>{
        setCurrentUser(token)
        localStorage.setItem('token', token)
    }

    const logoutHandler = () =>{
        localStorage.clear('token')
        setCurrentUser(null)
    }

    return (
        <Contxt.Provider value={{
            signUpUser: signUp,
            signInUser: signIn,
            user: currentUser,
            signOutUser: signOutUser,
            googleSignIn: signWithGoogle,
            passwordReset: passwordReset,
            storeToken: loginHandler,
            clearToken: logoutHandler

            }}>

        {children}
        </Contxt.Provider>
    )
}

export default Contxt



