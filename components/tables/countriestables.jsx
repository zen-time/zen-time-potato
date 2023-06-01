'use client'
import React, { useState } from 'react'
import Country from './data';
import Image from 'next/image';

const Countriestables = () => {

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
              <th className="p-5 text-2xl">Country Name</th>
              <th className="text-2xl ">Country Native Name</th>
              <th className="text-2xl ">Country Capital</th>
              <th className="text-2xl ">Country Flag</th>
            </tr>
          </thead>
          <tbody>
            {Country.filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.name.toLowerCase().includes(search);
            }).map((item) => {
              return (
                <tr className="text-center">
                  <td className="p-5 border-2   ">{item.name}</td>
                  <td className="p-5 border-2 ">
                    {item.nativeName}
                  </td>
                  <td className="p-5 border-2 ">{item.capital}</td>
                  <td className="p-5 border-2 ">
                    <Image
                      src={item.flags.svg}
                      width={50}
                      height={50}
                      alt="flags.svg"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Countriestables;
