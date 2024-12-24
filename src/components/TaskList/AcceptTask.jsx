import React from 'react'

const AcceptTask = ({data}) => {
    
  return (
   
    <div className='relative flex-shrink-0 bg-yellow-400 w-[410px] rounded-xl p-8' >
    <div className='flex items-center justify-between'>
         <h3 className='bg-red-400 p-2 rounded-md text-white'>{data.category}</h3>
         <h4 className='text-white'>{data.taskDate}</h4>
    </div>
    <h1 className='text-white font-semibold text-3xl pt-5'>{data.taskTitle}</h1>
    <p className='text-white text-md pt-3'>{data.taskDescription}</p>
    <div className=' flex justify-between  absolute bottom-8 '>
    <button className='bg-green-400 py-2 px-2 rounded-md '>Mark as Completed</button>
    <button className='bg-red-500 py-2 px-2 rounded-md '>Mark as failed</button>
    </div>
    </div>
  )
}

export default AcceptTask;