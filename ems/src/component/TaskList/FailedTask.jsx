import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className=' flex-shrink-0 bg-orange-400 h-full w-[400px] rounded-xl p-2'>
            <div className='flex justify-between items-center p-4'>
                <h2 className='px-4 rounded bg-red-600 font-semibold'> {data.category}</h2>
                <h3 className='text-sm font-semibold'>{data.taskDate}</h3>
            </div>
            <h3 className='font-medium text-2xl'>{data.taskTitle}</h3>
            <p className='text-sm mt-2'> 
            {data.taskDescription}
             </p>
             <div className='mt-4'>
                <button className='bg-blue-950 text-white rounded py-2 px-2 hover:bg-blue-500'>Failed</button>
             </div>
        </div>
  )
}

export default FailedTask
