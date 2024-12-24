import React from 'react';


const AllTask = () => { 
  const data=JSON.parse(localStorage.getItem('employees'));
  console.log("All task listing");
  console.log(data);
  return (
    <div className='bg-[#1c1c1c] p-10 mt-10 rounded-xl'>
       <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5'>New Task</h3>
            <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5'>Completed</h5>
            <h5 className='text-lg font-medium w-1/5'>Failed</h5>
        </div>
        <div className=''>
        {data.map((elem,idx)=>{
          
           return <div key={idx} className=' border-2 rounded-xl mb-2 py-2 px-4 flex justify-between '>
          <h2 className='text-lg font-medium w-1/5'>{elem.firstName}</h2>
          <h3 className='text-lg font-medium w-1/5'>{elem.taskCounts.newTask}</h3>
          <h5 className='text-lg font-medium w-1/5'>{elem.taskCounts.active}</h5>
          <h5 className='text-lg font-medium w-1/5'>{elem.taskCounts.completed}</h5>
          <h5 className='text-lg font-medium w-1/5'>{elem.taskCounts.failed}</h5>
      </div>
      
        })}
        </div>
        
    </div>
  )
}

export default AllTask;