import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  // useEffect(()=>{
  //   setLocalStorage();
  //  getLocalStorage();
  // },)
 const authData= useContext(AuthContext);
console.log(authData);
const [user, setUser] =useState('');
useEffect(()=>{
  if(authData){
    localStorage.getItem('loggedInUser')
  }
},[authData]);

const handleLogin = (email,password) =>{
  if(email=== 'admin@me.com' && password === '123'){
    setUser('admin');
    console.log('This is ' + user);
    localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}));
  }
  else if(authData && authData.employees.find((e)=>e.email===email && e.password===password)){
    setUser('employee');
    console.log('This is ' + user);
    localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}));
  }
  else alert('Invalid credentails');

}



  return (
  <>{!user? <Login handleLogin={handleLogin}/> : ''}
    {user==='admin'? <AdminDashboard/> : <EmployeeDashboard/>}
 
  {/* <EmployeeDashboard/> */}
  {/* <AdminDashboard/> */}
  </>
  )
}

export default App;