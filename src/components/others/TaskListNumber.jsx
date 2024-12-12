import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex items-center justify-between gap-7 mt-10'>
     <div className='bg-red-400 px-6 py-9 rounded-lg w-[45%]'>
         <h1 className='text-5xl font-bold text-white'>{data.taskCounts.newTask}</h1>
         <h1 className='text-2xl font-medium text-white'>New Task</h1>
      </div>

      <div className='bg-blue-400 px-6 py-9 rounded-lg w-[45%]'>
         <h1 className='text-5xl font-bold text-white'>{data.taskCounts.completed}</h1>
         <h1 className='text-2xl font-medium text-white'>Completed</h1>
      </div>
      <div className='bg-green-400 px-6 py-9 rounded-lg w-[45%]'>
         <h1 className='text-5xl font-bold text-white'>{data.taskCounts.active}</h1>
         <h1 className='text-2xl font-medium text-white'>Active</h1>
      </div>
      <div className='bg-yellow-400 px-6 py-9 rounded-lg w-[45%]'>
         <h1 className='text-5xl font-bold text-white'>{data.taskCounts.failed}</h1>
         <h1 className='text-2xl font-medium text-white'>Failed</h1>
      </div>
    
     

    </div>
  )
}

export default TaskListNumber