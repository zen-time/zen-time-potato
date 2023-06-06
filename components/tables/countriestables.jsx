'use client'
import React, { useState } from 'react'
import Country from './countrydata';
import Image from 'next/image';

const Countriestables = () => {

  const [search,setSearch] = useState('');

  return (
    <>
    <div>
      <h1 className='text-4xl'>Country List</h1>
    </div>
      <div className="flex justify-center p-3">
        <input
          type="text"
          placeholder="Search here..."
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
            }).map((item, index) => {
              return (
                <tr className="text-center" key={index}>
                  <td className="p-5 border-2 text-lg">{item.name}</td>
                  <td className="p-5 border-2 text-lg">
                    {item.nativeName}
                  </td>
                  <td className="p-5 border-2 text-lg">{item.capital}</td>
                  <td className="p-5 border-2 text-lg ">
                    <Image
                      src={item.flags.svg}
                      alt="flags.svg"
                      width={0}
                      height={0}
                      style={{width:'50px', height:'auto'}}
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
