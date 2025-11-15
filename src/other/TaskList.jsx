import React from 'react'

const TaskList = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
      <div className='bg-red-400 p-7 rounded-lg flex flex-col items-center'>
        <h2 className='text-2xl font-semibold'>0</h2>
        <h3 className='text-xl font-semibold'>New Task</h3>
      </div>
      <div className='bg-blue-400 p-7 rounded-lg flex flex-col items-center'>
        <h2 className='text-2xl font-semibold'>0</h2>
        <h3 className='text-xl font-semibold'>New Task</h3>
      </div>
      <div className='bg-yellow-600 p-7 rounded-lg flex flex-col items-center'>
        <h2 className='text-2xl font-semibold'>0</h2>
        <h3 className='text-xl font-semibold'>New Task</h3>
      </div>
      <div className='bg-green-400 p-7 rounded-lg flex flex-col items-center'>
        <h2 className='text-2xl font-semibold'>0</h2>
        <h3 className='text-xl font-semibold'>New Task</h3>
      </div>
    </div>
  )
}

export default TaskList