import React from 'react'

const createTask = () => {
  return (
    <div className='bg-[#1c1c1c] p-10 rounded-xl  '>
      <form className=' flex flex-wrap w-full items-start justify-between '>
        <div className='w-1/2'>
          <div>
            <h3>Task Title</h3>
            <input className=' bg-transparent  border-2 border-gray-400 px-2 py-2 w-4/5 rounded-lg' type="text" placeholder='Make a UI design' />
          </div>
          <div>
            <h3 className='mt-3'>Date</h3>
            <input className='bg-transparent  border-2 border-gray-400 px-2 py-2 w-4/5 rounded-lg' type="date" placeholder='dd/mm/yyyy' />
          </div>
          <div>
            <h3 className='mt-3'>Assign To</h3>
            <input  className='bg-transparent  border-2 border-gray-400 px-2 py-2 w-4/5 rounded-lg' type="text" placeholder='Employee Name' />
          </div>
          <div>
            <h3 className='mt-3'>Category</h3>
            <input className='bg-transparent  border-2 border-gray-400 px-2 py-2 w-4/5 rounded-lg'  type="text" placeholder='Design, Dev, etc' />
          </div>
        </div>

        <div className='w-2/5 flex flex-col items-start'>
          <h3 className=''>Description</h3>
          <textarea className='bg-transparent  border-2 border-gray-400 px-2 py-2 w-4/5 rounded-lg h-56' name=""></textarea>
          <button  className='mt-3 w-4/5 bg-emerald-400 py-4 rounded-lg ' type="submit">Create Task</button>
        </div>





      </form>
    </div>
  )
}

export default createTask