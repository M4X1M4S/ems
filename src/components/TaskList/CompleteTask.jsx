import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className=' flex-shrink-0 bg-green-400 w-[410px] rounded-xl p-8' >
    <div className='flex items-center justify-between'>
         <h3 className='bg-red-400 p-2 rounded-md text-white'>{data.category}</h3>
         <h4 className='text-white'>{data.taskDate}</h4>
    </div>
    <h1 className='text-white font-semibold text-3xl pt-5'>{data.taskTitle}</h1>
    <h2 className='text-white text-md pt-3'> {data.taskDescription}</h2>
    <button className='bg-yellow-400 px-2 py-2'>Completed</button>
</div>
  )
}

export default CompleteTask;