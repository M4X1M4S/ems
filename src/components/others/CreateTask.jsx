import React ,{useContext, useState} from 'react'
import { AuthContext } from '../../context/AuthProvider';



const CreateTask = ({data}) => {
 

  const [title,setTitle]=useState('');          
  const [date,setDate]=useState('');          
  const [assign,setAssign]=useState('');          
  const [category,setCategory]=useState('');          
  const [description,setDescription]=useState('');  
  const handleClick=()=>{
    const updatedEmployees=data.map((elem)=>{
      if(elem.firstName===assign){
       return{
        ...elem,
        taskCounts:{...elem.taskCounts,newTask:elem.taskCounts.newTask+1,},
        tasks:[...elem.tasks,{
          active: false,
          category: category,
          completed: false,
          failed: false,
          newTask: true,
          taskdate: date,
          taskDescription: description,
          taskTitle: title,
        }]
       }
   
        
      }
      return elem;
    })
    console.log("updated " + JSON.stringify(updatedEmployees))
    localStorage.setItem('employees' , JSON.stringify(updatedEmployees) );
    
  }        
  const handleSubmit=(e)=>{
    e.preventDefault();
  setTitle('');
  setDate('');
  setAssign('');
  setCategory('');
  setDescription('');
  }

  return (
    <div className='bg-[#1c1c1c] p-10 rounded-xl  '>
      <form onSubmit={(e)=>handleSubmit(e)} className=' flex flex-wrap w-full items-start justify-between '>
        <div className='w-1/2'>
          <div>
            <h3>Task Title</h3>
            <input onChange={(e)=>setTitle(e.target.value)} className=' bg-transparent  border-2 border-gray-400 px-2 py-2 w-4/5 rounded-lg' value={title} type="text" placeholder='Make a UI design' />
          </div>
          <div>
            <h3 className='mt-3'>Date</h3>
            <input onChange={(e)=>setDate(e.target.value)} className='bg-transparent  border-2 border-gray-400 px-2 py-2 w-4/5 rounded-lg' value={date}  type="date" placeholder='dd/mm/yyyy' />
          </div>
          <div>
            <h3 className='mt-3'>Assign To</h3>
            <input onChange={(e)=>setAssign(e.target.value)} className='bg-transparent  border-2 border-gray-400 px-2 py-2 w-4/5 rounded-lg' value={assign} type="text" placeholder='Employee Name' />
          </div>
          <div>
            <h3 className='mt-3'>Category</h3>
            <input onChange={(e)=>setCategory(e.target.value)} className='bg-transparent  border-2 border-gray-400 px-2 py-2 w-4/5 rounded-lg' value={category}  type="text" placeholder='Design, Dev, etc' />
          </div>
        </div>

        <div className='w-2/5 flex flex-col items-start'>
          <h3 className=''>Description</h3>
          <textarea onChange={(e)=>setDescription(e.target.value)} value={description} className='bg-transparent  border-2 border-gray-400 px-2 py-2 w-4/5 rounded-lg h-56' name=""></textarea>
          <button  onClick={handleClick} className='mt-3 w-4/5 bg-emerald-400 py-4 rounded-lg ' type="submit">Create Task</button>
        </div>





      </form>
    </div>
  )
}

export default CreateTask;