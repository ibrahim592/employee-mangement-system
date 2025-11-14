import React from 'react'

const TaskList = () => {
  return (
    <div className='flex justify-between gap-4 p-4'>
      <div className='w-[45%] bg-red-400 p-7 rounded-lg text-white flex flex-col items-center'>
        <h2 className='text-2xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='w-[45%] bg-blue-400 p-7 rounded-lg text-white flex flex-col items-center'>
        <h2 className='text-2xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='w-[45%] bg-yellow-600 p-7 rounded-lg text-white flex flex-col items-center'>
        <h2 className='text-2xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='w-[45%] bg-green-400 p-7 rounded-lg text-white flex flex-col items-center'>
        <h2 className='text-2xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
    </div>
    
  )
}

export default TaskList
