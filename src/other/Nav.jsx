import React from 'react'

const Nav = () => {
  return (

    <div className='bg-gray-100 w-full '>
      <nav className='w-full bg-blue-500 flex items-center justify-between'>
        <h1 className='text-white text-3xl font-bold py-3 px-8'>Hello Employee</h1>
        <button className='text-white px-3 py-1 mx-4 border-2 border-white rounded-lg hover:bg-white hover:text-blue-500 transition duration-300'>Log Out</button>
      </nav>
    </div>

  )
}

export default Nav
