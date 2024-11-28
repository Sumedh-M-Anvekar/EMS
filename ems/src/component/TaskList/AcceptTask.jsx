import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className=' flex-shrink-0 bg-green-400 h-full w-[400px] rounded-xl p-2'>
    <div className='flex justify-between items-center p-4'>
        <h2 className='px-4 rounded bg-red-600 font-semibold'> {data.category}</h2>
        <h3 className='text-sm font-semibold'>{data.taskDate}</h3>
    </div>
    <h3 className='font-medium text-2xl'>{data.taskTitle}</h3>
    <p className='text-sm mt-2'> 
    {data.taskDescription}
     </p>
     <div className='flex justify-between mt-4'>
        <button className='bg-green-700 rounded text-white py-2 px-2 text-sm hover:bg-green-500'>Mark as completed</button>
        <button className='bg-red-700 rounded text-white py-2 px-2 text-sm hover:bg-red-500'>Mark as failed</button>
     </div>
</div>
  )
}

export default AcceptTask
