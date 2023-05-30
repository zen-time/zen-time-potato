'use client'
import React from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const Alerts = () => {

    const handleLogin = () =>{
        toast.success('Login Suceess')
    }
    const handleLogout = () =>{
        toast('Logout Suceess')
    }
    const handleError = () =>{
        toast.error('Login Error')
    }
    const handleWarning = () =>{
        toast.warning('Login Warning')
    }
    const handleInfo = () =>{
        toast.info('Login Suceess')
    }
  return (
    <div className='flex flex-col items-center justify-center gap-6'>
        
      <button className='w-[6rem] animate-bounce hover:scale-110 border-2 rounded-xl text-white bg-green-600 p-1 px-2' onClick={handleLogin}>LOGIN</button>
      <button className='w-[6rem]  hover:scale-110 border-2 rounded-xl text-white bg-red-600 p-1 px-2' onClick={handleLogout}>LogOut</button>
      <button className='w-[6rem] animate-bounce hover:scale-110 border-2 rounded-xl text-white bg-red-600 p-1 px-2' onClick={handleError}>Error</button>
      <button className='w-[6rem] hover:scale-110 border-2 rounded-xl text-white bg-orange-600 p-1 px-2' onClick={handleWarning}>Warning</button>
      <button className='w-[6rem] hover:scale-110 border-2 rounded-xl text-white bg-blue-300 p-1 px-2' onClick={handleInfo}>Info</button>
      <ToastContainer/>
    </div>
  )
}

export default Alerts;
