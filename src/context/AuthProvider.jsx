import React, { useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
export const AuthContext= React.createContext();
const AuthProvider = ({children}) => {
    const [userData, setUserData]=useState('');
 
    useEffect(()=>{
      setLocalStorage();
      const data= getLocalStorage();
      setUserData(data);
    },[]);
     
   
  return (
    <div>
    <AuthContext.Provider value={userData}>
        {children}
    </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider;