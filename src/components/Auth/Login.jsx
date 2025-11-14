import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = (e) => {
        e.preventDefault()
        setEmail('')
        setPassword('')
    }
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-blue-600 p-4">
    
      <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide mb-8 text-center">
        Employee Management System
      </h1>

      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 text-center mb-6">
          Login to Your Panel
        </h2>

        <form 
        onSubmit={(e)=>{
                submitHandler(e)
        }}  
        className="flex flex-col space-y-4">
          <div>
            <label
              htmlFor="username" className="block text-gray-700 font-medium mb-1"
            >
              Username
            </label>
            <input required
              value={email}
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
              id="username" type="email" placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="password" className="block text-gray-700 font-medium mb-1"
            >
              Password
            </label>
            <input 
            value={password}
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
            required
              id="password" type="password" placeholder="Enter your password here"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-lg font-semibold py-2 hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login