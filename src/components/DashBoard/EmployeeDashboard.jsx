import React from 'react'
import Nav from '../../other/Nav'
import TaskList from '../../other/TaskList'
import ListofTask from '../TaskList/ListofTask'

const EmployeeDashboard = () => {
  return (
    <div className='h-screen'>
      <Nav />
       <div className='p-8'>
           <h2 className='text-4xl font-bold mb-4'>Dashboard: My Tasks</h2>
            <p className='text-gray-700'>Here you can view and manage your tasks.</p>
        </div>
      <TaskList />
      <ListofTask />
    </div>
  )
}

export default EmployeeDashboard