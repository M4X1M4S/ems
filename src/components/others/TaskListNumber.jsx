import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex items-center justify-between gap-7 mt-10'>
     <div className='bg-red-400 px-6 py-9 rounded-lg w-[45%]'>
         <h1 className='text-5xl font-bold text-white'>0</h1>
         <h1 className='text-2xl font-medium text-white'>completed</h1>
      </div>

      <div className='bg-blue-400 px-6 py-9 rounded-lg w-[45%]'>
         <h1 className='text-5xl font-bold text-white'>0</h1>
         <h1 className='text-2xl font-medium text-white'>completed</h1>
      </div>
      <div className='bg-green-400 px-6 py-9 rounded-lg w-[45%]'>
         <h1 className='text-5xl font-bold text-white'>0</h1>
         <h1 className='text-2xl font-medium text-white'>completed</h1>
      </div>
      <div className='bg-yellow-400 px-6 py-9 rounded-lg w-[45%]'>
         <h1 className='text-5xl font-bold text-white'>0</h1>
         <h1 className='text-2xl font-medium text-white'>completed</h1>
      </div>
    
     

    </div>
  )
}

export default TaskListNumber