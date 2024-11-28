import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
    <div className=' w-[45%] py-6 px-10 bg-red-400 rounded-xl'>
    <h2 className='text-2xl font-semibold'>{data.taskCounts.newTask}</h2>
    <h3 className='text-3xl font-medium'>New Task</h3>
    </div>
    <div className=' w-[45%] py-6 px-10 bg-blue-400 rounded-xl'>
    <h2 className='text-2xl font-semibold'>{data.taskCounts.completed}</h2>
    <h3 className='text-3xl font-medium'>Completed Task</h3>
    </div>
    <div className=' w-[45%] py-6 px-10 bg-green-400 rounded-xl'>
    <h2 className='text-2xl font-semibold'>{data.taskCounts.active}</h2>
    <h3 className='text-3xl font-medium'>Active Task</h3>
    </div>
    <div className=' w-[45%] py-6 px-10 bg-orange-400 rounded-xl'>
    <h2 className='text-2xl font-semibold'>{data.taskCounts.failed}</h2>
    <h3 className='text-3xl font-medium'>Failed Task</h3>
    </div>
    </div>
  )
}

export default TaskListNumber
