import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const [userData, setUserData]=useContext(AuthContext);
  return (
    <div id="alltask" className='p-4'>

<div className='text-white mb-2 font-medium bg-red-700 flex justify-between p-2 rounded'>
        <h2 className='w-1/5'>Employee Name</h2>
        <h3 className='w-1/5'>New Task</h3>
        <h5 className='w-1/5'>Active Task</h5>
        <h5 className='w-1/5'>Completed</h5>
        <h5 className='w-1/5'>Failed</h5>
      </div>

    <div>
    {userData.map((elem,idx)=>{
      return <div key={idx} className='mb-2 border-emerald-500 font-medium border-2 flex justify-between p-2 rounded'>
        <h2 className='w-1/5 text-white'>{elem.name}</h2>
        <h3 className='w-1/5 text-blue-600'>{elem.taskCounts.newTask}</h3>
        <h5 className='w-1/5 text-yellow-400'>{elem.taskCounts.active}</h5>
        <h5 className='w-1/5 text-white'>{elem.taskCounts.completed}</h5>
        <h5 className='w-1/5 text-red-600'>{elem.taskCounts.failed}</h5>
      </div>
    })}
    </div>
      

    </div>
  )
}

export default AllTask
