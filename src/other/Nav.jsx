import React from 'react'

const Nav = () => {
  return (
    <div className='bg-gray-100 w-full '>
      <nav className='w-full bg-blue-500 flex items-center justify-between px-4 md:px-8'>
        <h1 className='text-white text-2xl md:text-3xl font-bold py-4 md:py-3'>Hello Employee</h1>
        <button className='text-white px-3 py-1 mx-2 md:mx-4 border-2 border-white rounded-lg hover:bg-white hover:text-blue-500 transition duration-300'>
          Log Out
        </button>
      </nav>
    </div>
  )
}

export default Nav