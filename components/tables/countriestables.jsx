import React from 'react'
import Country from './data';
import Image from 'next/image';

const Countriestables = ({Country}) => {
  return (
    <div className='w-screen flex justify-center p-10 mt-10'>
      <table className="w-[60rem] h-52 border-2 border-lime-800 table-auto  rounded-lg p-5">
        <thead>
            <tr>
                <th className='p-5 text-2xl text-indigo-800'>Country Name</th>
                <th className='text-2xl text-indigo-800'>Country Native Name</th>
                <th className='text-2xl text-indigo-800'>Country Capital</th>
                <th className='text-2xl text-indigo-800'>Country Flag</th>
            </tr>
        </thead>
        <tbody>
            {Country.map(({name,nativeName,capital,flags})=>{
                return(
                    <tr className='text-center'>
                        <td className='p-5 border-2  border-black'>{name}</td>
                        <td className='p-5 border-2 border-black'>{nativeName}</td>
                        <td className='p-5 border-2 border-black'>{capital}</td>
                        <td className='p-5 border-2 border-black'><Image src={flags.svg} width={50} height={50} alt='flags.svg'  /></td>
                    </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default Countriestables;
