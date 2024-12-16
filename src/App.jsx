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

const [user, setUser] =useState('');
const [userData, setUserData] = useState('');

useEffect(()=>{
const loggedInUser=localStorage.getItem('loggedInUser');
if(loggedInUser){
const data= JSON.parse(loggedInUser);
setUser(data.role);
setUserData(data.data);
}
},[])
 

const handleLogin = (email,password) =>{
  if(email=== 'admin@example.com' && password === '123'){
   
    setUser('admin');
    console.log('This is ' + user);
    localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}));
  }
  else if(authData ){
    const data = authData.employees.find((e)=>e.email===email && e.password===password)
    if(data){
      console.log(data);
      setUser('employee');
      setUserData(data);
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee', data: data}));
      
    }
   
  }
  else alert('Invalid credentails');
  

}



  return (
  <>{!user? <Login handleLogin={handleLogin}/> : ''}
    {user==='admin'? <AdminDashboard/> : user==='employee'? <EmployeeDashboard data={userData}/>:''}
 
  {/* <EmployeeDashboard/> */}
  {/* <AdminDashboard/> */}
  </>
  )
}

export default App;