import React, { useContext } from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'
import { AuthContext } from '../../context/AuthProvider'



const AdminDashboard = () => {
  const data=useContext(AuthContext);
  
  
  return (

    <div className=' bg-[#000000] py-10 px-10 w-full h-screen overflow-y-scroll'>
    <Header/>
    <CreateTask data={data.employees}/>
    <AllTask data={data.employees}/>
    </div>
  )
}

export default AdminDashboard;