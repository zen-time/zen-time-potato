import React from "react";

const ClientTable = ({ textColor, titleColor }) => {
  return (
    <div className="m-10">
      <h2 className={`my-10 ${titleColor}`}>Client Table</h2>
      {/* input fields */}
      <div className="flex justify-around">
        <input className="input  input-ghost border-gray-300 " />

        <button>Clear</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-md border-2 border-gray-200 ">
          {/* head */}
          <thead className="">
            <tr className={`bg-neutral-content text-base ${textColor}`}>
              <th></th>
              <th className=" text-gray-400  ">Business Name</th>
              <th className=" text-gray-400  ">Client ID</th>
              <th className=" text-gray-400  ">Email</th>
              <th className=" text-gray-400  ">Contact Number</th>
              <th className=" text-gray-400  ">Net Terms</th>
              <th className=" text-gray-400  ">Termination Notice</th>
              <th className=" text-gray-400  ">Status</th>
              <th className=" text-gray-400  ">Category</th>
              <th className=" text-gray-400  ">Additional Info</th>
              <th className=" text-gray-400  ">Active Placements</th>
              <th className=" text-gray-400  ">Action</th>
            </tr>
          </thead>
          <tbody className="divide-x-10 divide-green-500">
            {/* row 1 */}
            <tr className="hover ">
              <th>1</th>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                Akash{" "}
              </td>
              <td>75123</td>
              <td>akash@inc.com</td>
              <td>9629653377</td>
              <td>-</td>
              <td>-</td>
              <td>Inactive</td>
              <td>-</td>
              <td>-</td>
              <td>2</td>
              <td></td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th>2</th>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                Kesavan
              </td>
              <td>75124</td>
              <td>kesavan@inc.com</td>
              <td>8075423337</td>
              <td>-</td>
              <td>-</td>
              <td>Active</td>
              <td>-</td>
              <td>-</td>
              <td>5</td>
              <td></td>
            </tr>
            {/* row 3 */}
            <tr className="hover">
              <th>3</th>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                Naveen Kumar
              </td>
              <td>75125</td>
              <td>naveen@inc.com</td>
              <td>902965723</td>
              <td>-</td>
              <td>-</td>
              <td>Inactive</td>
              <td>-</td>
              <td>-</td>
              <td>0</td>
              <td></td>
            </tr>
            {/* row 4 */}
            <tr className="hover">
              <th>4</th>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                Arun Prakash
              </td>
              <td>75126</td>
              <td>arun@inc.com</td>
              <td>9945687219</td>
              <td>-</td>
              <td>-</td>
              <td>Active</td>
              <td>-</td>
              <td>-</td>
              <td>3</td>
              <td></td>
            </tr>
            {/* row 5 */}
            <tr className="hover">
              <th>5</th>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                Manoj
              </td>
              <td>75127</td>
              <td>manoj@inc.com</td>
              <td>9956231245</td>
              <td>-</td>
              <td>-</td>
              <td>Active</td>
              <td>-</td>
              <td>-</td>
              <td>2</td>
              <td></td>
            </tr>
            {/* row 6 */}
            <tr className="hover">
              <th>6</th>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                Vishnu
              </td>
              <td>75128</td>
              <td>vishnu@inc.com</td>
              <td>9366144319</td>
              <td>-</td>
              <td>-</td>
              <td>Inactive</td>
              <td>-</td>
              <td>-</td>
              <td>1</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientTable;
