import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = ({data}) => {
  console.log(data);
 
  return (
   <div className='bg-[#1C1C1C] h-screen w-screen px-20 py-16' > 
   <Header data={data}/>
   <TaskListNumber  data={data}/>
   <TaskList  data={data}/>
   </div>
  )
}

export default EmployeeDashboard;