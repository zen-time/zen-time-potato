import React from "react";

const ClientTable = ({ textColor, tableData_text_center }) => {
  return (
    <div className="m-10 ">
      <h2 className={`my-10 text-2xl text-black`}>Client Details</h2>
      {/* input fields */}
      <div className="flex justify-between  w-[100%] ">
        <div>
          {/* search input */}
          <div className="join ">
            <input className="input  join-item  " placeholder="Search.." />
            <button className="btn join-item rounded-r-full">Search</button>
          </div>

          <div className="dropdown dropdown-right dropdown-end ">
            <label tabIndex={0} className="btn m-1">
              Status
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-1 shadow bg-base-100 rounded-box w-32"
            >
              <li>
                <a>Active</a>
              </li>
              <li>
                <a>Inactive</a>
              </li>
            </ul>
          </div>
          {/* exit button */}
        </div>
        <button className="btn m-2 bg-red-300 hover:text-gray-500 ">
          Exit
        </button>
      </div>
      {/* table */}
      <div className="overflow-x-auto ">
        <table className="table table-md border-2 border-gray-200 drop-shadow-md ">
          {/* head */}
          <thead>
            <tr className={`bg-neutral-content text-base ${textColor}`}>
              <th></th>
              <th>Business Name</th>
              <th>Client ID</th>
              <th>Email</th>
              <th>Contact Number</th>
              <th>Net Terms</th>
              <th>Termination Notice</th>
              <th>Status</th>
              <th>Category</th>
              <th>Additional Info</th>
              <th>Active Placements</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="drop-shadow-md ">
            {/* row 1 */}
            <tr className="hover ">
              <th>1</th>
              <td className="py-4 px-6 text-sm font-medium  ">Akash </td>
              <td>75123</td>
              <td>akash@inc.com</td>
              <td>9629653377</td>
              <td className={tableData_text_center}>-</td>
              <td className={tableData_text_center}>-</td>
              <td className={tableData_text_center}>Inactive</td>
              <td className={tableData_text_center}>-</td>
              <td className={tableData_text_center}>-</td>
              <td className={tableData_text_center}>2</td>
              <td className={tableData_text_center}>
                <span className="p-2 bg-gray-300 rounded">Edit</span>
              </td>
            </tr>
            {/* row 2 */}
            <tr className="hover ">
              <th>2</th>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 ">
                Kesavan
              </td>
              <td>75124</td>
              <td>kesavan@inc.com</td>
              <td>8075423337</td>
              <td className={tableData_text_center}>-</td>
              <td className={tableData_text_center}>-</td>
              <td className={tableData_text_center}>Active</td>
              <td className={tableData_text_center}>-</td>
              <td className={tableData_text_center}>-</td>
              <td className={tableData_text_center}>5</td>
              <td className={tableData_text_center}>
                {" "}
                <span className="p-2 bg-gray-300 rounded">Edit</span>
              </td>
            </tr>
            {/* row 3 */}
            <tr className="hover ">
              <th>3</th>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 ">
                Naveen Kumar
              </td>
              <td>75125</td>
              <td>naveen@inc.com</td>
              <td>902965723</td>
              <td className={tableData_text_center}>-</td>
              <td className={tableData_text_center}>-</td>
              <td className={tableData_text_center}>Inactive</td>
              <td className={tableData_text_center}>-</td>
              <td className={tableData_text_center}>-</td>
              <td className={tableData_text_center}>0</td>
              <td className={tableData_text_center}>
                {" "}
                <span className="p-2 bg-gray-300 rounded">Edit</span>
              </td>
            </tr>
            {/* row 4 */}
            <tr className="hover ">
              <th>4</th>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 ">
                Arun Prakash
              </td>
              <td>75126</td>
              <td>arun@inc.com</td>
              <td>9945687219</td>
              <td className={tableData_text_center}>-</td>
              <td className={tableData_text_center}>-</td>
              <td className={tableData_text_center}>Active</td>
              <td className={tableData_text_center}>-</td>
              <td className={tableData_text_center}>-</td>
              <td className={tableData_text_center}>3</td>
              <td className={tableData_text_center}>
                {" "}
                <span className="p-2 bg-gray-300 rounded">Edit</span>
              </td>
            </tr>
            {/* row 5 */}
            <tr className="hover ">
              <th>5</th>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 ">
                Manoj
              </td>
              <td>75127</td>
              <td>manoj@inc.com</td>
              <td>9956231245</td>
              <td className={tableData_text_center}>-</td>
              <td className={tableData_text_center}>-</td>
              <td className={tableData_text_center}>Active</td>
              <td className={tableData_text_center}>-</td>
              <td className={tableData_text_center}>-</td>
              <td className={tableData_text_center}>2</td>
              <td className={tableData_text_center}>
                {" "}
                <span className="p-2 bg-gray-300 rounded">Edit</span>
              </td>
            </tr>
            {/* row 6 */}
            <tr className="hover ">
              <th>6</th>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 ">
                Vishnu
              </td>
              <td>75128</td>
              <td>vishnu@inc.com</td>
              <td>9366144319</td>
              <td className={tableData_text_center}>-</td>
              <td className={tableData_text_center}>-</td>
              <td className={tableData_text_center}>Inactive</td>
              <td className={tableData_text_center}>-</td>
              <td className={tableData_text_center}>-</td>
              <td className={tableData_text_center}>1</td>
              <td className={tableData_text_center}>
                {" "}
                <span className="p-2 bg-gray-300 rounded">Edit</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientTable;
