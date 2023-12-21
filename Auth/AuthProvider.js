import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, onAuthStateChanged } from 'firebase/auth'
import app from "../firebase/firebase.config";
//global variable create
export const ContextAuth = createContext();


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()

const AuthContextFunction = ({children}) =>{
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)


    // create account
    const createUser = (email,pass)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,pass)
    }
    const loginUser = (email,pass)=>{ 
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,pass)
    }
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    const googleLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }
    const githubLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth,githubProvider)
    }

    const updateUser = (updatedInfo) =>{
        return updateProfile(auth.currentUser,updatedInfo)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,fuser=>{
            setUser(fuser);
            console.log('get user from authcontext',fuser);
            setLoading(false)
        });
        return (()=>unsubscribe());
    },[])
    const userInfo ={
        user,
        loading,
        createUser,
        loginUser,
        logOut,
        googleLogin,
        githubLogin,
        updateUser

    }

    return <ContextAuth.Provider value={userInfo}>
        {children}
    </ContextAuth.Provider>

}

// export const auth = useAuth(ContextAuth);

const useGlobalContext = ()=>{
    return useContext(ContextAuth)
}
export  {
    AuthContextFunction,
    useGlobalContext
};