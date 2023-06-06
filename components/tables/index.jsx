'use client'
import React, { useState } from 'react'
import Employee from './data';


const Employeetables = () => {

  const [search,setSearch] = useState('')

  return (
    <>
      <div className="flex justify-center items-center p-3">
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className='text-xl text-center rounded-xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
            <td>
                <input type='checkbox'/>
              </td>
              <th className="p-5 text-2xl">Employee Name</th>
              <th className="text-2xl ">Email</th>
              <th className="text-2xl ">Position</th>
              <th className="text-2xl">Status</th>
              <th className="text-2xl">Action</th>

            </tr>
          </thead>
          <tbody>
            {Employee.filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.name.toLowerCase().includes(search);
            }).map((item) => {
              return (
               
                <tr className="text-center">
                  <td>
                <input type='checkbox'/>
              </td>
                  <td className="p-5 border-2 text-xl cursor-pointer">{item.name}</td>
                  <td className="p-5 border-2 text-xl cursor-pointer"> {item.email} </td>
                  <td className="p-5 border-2 text-xl cursor-pointer">{item.position}</td>
                  <td className="p-5 border-2 text-xl  text-green-500 cursor-pointer hover:underline">{item.status} </td>
                  <td className="p-5 border-2 text-xl  text-blue-500 cursor-pointer underline">{item.action} </td>

                </tr>
              );
            })}
          </tbody>
        
        </table>
        <div className="flex justify-center items-center ">
            <button className='rounded-none bg-blue-500 hover:bg-green-500 text-white font-bold py-2 px-4  '>Prev</button>    Or
            <button className='rounded-none bg-blue-500 hover:bg-green-500 text-white font-bold py-2 px-4 '>Next</button>
          </div>
          
      </div>
    </>  
  );
}
    
export default Employeetables; 