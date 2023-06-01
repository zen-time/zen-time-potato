import React from 'react'
import { Company } from './selectedtabledata';

const Selectedtable = () => {
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Company Name</th>
            </tr>
        </thead>
        <tbody>
            {Company.map((item)=>{
                return(
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.email}</td>
                        <td>{item.Role}</td>
                        <td>{item['Company Name']}</td>

                    </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default Selectedtable;
