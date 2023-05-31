'use client'
import React from 'react'
import { ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Toast from './ToastContainer'


const Alerts = () => {

    const handleLogin = () =>{
        Toast('login Success','success')
    }
    const handleLogout = () =>{
      Toast('login Success')
        
    }
    const handleError = () =>{
      Toast('error message','error')
        
    }
    const handleWarning = () =>{
      Toast('Warning message','warning')
        
    }
    const handleInfo = () =>{
      Toast('Info Message','info')
        
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
