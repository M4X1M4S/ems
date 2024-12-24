import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className=' flex-shrink-0 bg-green-900 w-[410px] rounded-xl p-8' >
            <div className='flex items-center justify-between'>
                 <h3 className='bg-red-400 p-2 rounded-md text-white'>{data.category}</h3>
                 <h4 className='text-white'>{data.taskDate}</h4>
            </div>
            <h1 className='text-white font-semibold text-3xl pt-5'>{data.taskTitle}</h1>
            <h2 className='text-white text-md pt-3'>{data.taskDescription}</h2>
            <button className='bg-yellow-500 py-2 px-2 '>Accept</button>
        </div> 
  )
}

export default NewTask;