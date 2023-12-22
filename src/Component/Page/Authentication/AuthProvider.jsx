/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../../hooks/firebase.config";

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState('null');
    const [loading, setLoading] = useState(true);
    const createUser =( email, password)=>{
        setLoading(true);
        createUserWithEmailAndPassword(auth,email, password);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, user=>{
          setUser(user);
          console.log(user);
          setLoading(false);
        })
        return ()=>{
          return unsubscribe;
        }
    },[])
    const authInfo ={
       user,
       loading,
       createUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;