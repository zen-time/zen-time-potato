import React from 'react'
import { Company } from './selectedtabledata';

const Selectedtable = () => {

  // const [user,setUser] = useState([]);


  // useEffect(()=>{
  //   setUser(Company);
  // },[])




  return (
    <div className='flex justify-center items-center flex-col gap-1'>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400" >
      <thead className='text-xl text-center  rounded-xl text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
                <th className='p-3 text-center'>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Company Name</th>
            </tr>
        </thead>
        <tbody className='border-2'>
            {Company.map((item)=>{
                return(
                    <tr className='text-center hover:bg-lime-100'>
                      <td>
                        <input type="checkbox" className='p-2 hover:text-black text-center border-2 border-x-2' />
                      </td>
                        <td className='p-2 hover:text-black text-center border-2 border-x-2'>{item.id}</td>
                        <td className='text-center p-3   hover:text-black border-2 border-x-2'>{item.first_name}</td>
                        <td className='text-center p-2 hover:text-black border-2 border-x-2'>{item.last_name}</td>
                        <td className='text-center p-2 hover:text-black border-2 border-x-2'>{item.email}</td>
                        <td className='text-center p-2 hover:text-black border-2 border-x-2'>{item.Role}</td>
                        <td className='text-center p-2 hover:text-black border-2 border-x-2'>{item['Company Name']}</td>

                    </tr>
                )
            })}
        </tbody>
      </table>
      {/* <hr /> */}
    </div>
  )
}

export default Selectedtable;
