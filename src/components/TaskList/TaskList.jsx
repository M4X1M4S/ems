import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
   
  return (
   
    <div id='tasklist' className='h-[55%] flex flex-nowrap  overflow-x-auto mt-14 py-6 gap-7'>
       {/* {console.log('hola amigo')} */}
     {data.tasks.map((elem,idx)=>{
        if(elem.active){
           return <AcceptTask data={elem} key={idx}/>
        }
        if(elem.newTask){
            return <NewTask data={elem} key={idx}/>
        }
        if(elem.completed){
            return <CompleteTask data={elem} key={idx}/>
        }
        if(elem.failed){
            return <FailedTask data={elem} key={idx}/>
        }
     })}
        
        

        </div>
   
  )
}

export default TaskList;