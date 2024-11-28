import React, { useContext, useState } from 'react'
import NewTask from '../TaskList/NewTask';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

  const [userData, setUserData]=useContext(AuthContext);

  const [taskTitle, settaskTitle] = useState('');
  const [taskDescription, settaskDescription] = useState('');
  const [taskDate, settaskDate] = useState('');
  const [assignTo, setassignTo] = useState('');
  const [taskCategory,settaskCategory] = useState('');


  const [newtask, setnewTask] = useState([])

  const submitHandler = (e) =>{
    e.preventDefault();
    console.log(taskCategory,taskTitle,taskDescription,taskDate,assignTo)

    setnewTask({taskTitle,taskDescription,taskDate,taskCategory,active:false,newTask:true,failed:false,completed:false})

    const data= userData

    data.forEach(function(elem){
      if(assignTo==elem.name){
        elem.tasks.push(newtask)
        elem.taskCounts.newTask=elem.taskCounts.newTask+1
      }
    })
  
    setUserData(data)
    console.log(data)

    


  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} 
       className=' text-white mt-5 bg-gray-900 flex-wrap flex w-full h-full justify-between items-center'>
      <div className='w-1/2 p-8 '>
      <div className='mt-3'>
        <h3 className='text-white'>Task Title</h3>
        <input 
        className='bg-transparent border w-1/2 p-2' type="text" placeholder='Enter task title'
          value={taskTitle}
          onChange={(e)=>{
            settaskTitle(e.target.value);
          }}
        />
        </div>
      <div className='mt-3'>
        <h3 className='text-white'>Date</h3>
        <input 
        className='bg-transparent border w-1/2 p-2 text-gray-400' type="date"
          value={taskDate}
          onChange={(e)=>{
            settaskDate(e.target.value);
          }}
        />
        </div>

        <div className='mt-3'>
        <h3 className='text-white'>Assign to</h3>
        <input 
        className='bg-transparent border p-2 w-1/2' type="text" placeholder='employee name'
        value={assignTo}
          onChange={(e)=>{
            setassignTo(e.target.value);
          }}
        />
        </div>

        <div className='mt-3'>
        <h3 className='text-white'>Category</h3>
        <input 
        className='bg-transparent border p-2 w-1/2' type="text" placeholder="design, dev, etc"
        value={taskCategory}
          onChange={(e)=>{
            settaskCategory(e.target.value);
          }}
        />
        </div>

      </div>

        <div className='mt-3 w-1/2  flex-col'>
        <h3 className='text-white'>Description</h3>
        <textarea className='bg-transparent border p-2'  name="" id="" cols="52" rows="8"  placeholder="Enter description"
          value={taskDescription}
          onChange={(e)=>{
            settaskDescription(e.target.value);
          }}
        />
<br></br>
        <button className=' text-white font-medium bg-emerald-800 rounded-xl p-2 w-1/2'>Create Task</button>
        </div>

        
        
        </form>
      </div>
  )
}

export default CreateTask
