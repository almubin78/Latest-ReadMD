import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleLogin =() =>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }

    const gitHubLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth,githubProvider);
    }
    const updateUser = (userInfo) =>{
        return updateProfile(auth.currentUser, userInfo);
        // simple: return updateProfile(auth.currentUser, {displayName:userInfo});
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('user observing');
            setUser(currentUser);
            setLoading(false);
        })

        return () => unsubscribe();
    }, [])

    const authInfo = {
        user,
        loading,
        userCreate,
        logIn,
        googleLogin,
        gitHubLogin,
        updateUser,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
```
# in `index.js`
```
<React.StrictMode>
    <AuthProvider>
        <App />
    </AuthProvider>
    
</React.StrictMode>
```