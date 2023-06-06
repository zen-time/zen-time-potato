const Table = () => {
    return (
        <div  className="min-w-screen h-screen flex justify-center items-center flex-col">
      <table className="min-w-screen bg-white border border-gray-300 ">
        <thead>
          <tr>
            <th className="border-b border-gray-300 px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Name</th>
            <th className="border-b border-gray-300 px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Email</th>
            <th className="border-b border-gray-300 px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Role</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <img className="h-10 w-10 rounded-full" src="/assets/images/close.png" alt="Avatar" />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">Sachin Tendulkar</div>
                  <div className="text-sm text-gray-500">Sachintendulkar@gmail.com</div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">Sachintendulkar@gmail.com</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Admin</span>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <img className="h-10 w-10 rounded-full" src="/assets/images/contact.png" alt="Avatar" />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">Virat Kholi</div>
                  <div className="text-sm text-gray-500">Viratkholi@gmail.com</div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">Viratkholi@gmail.com</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">User</span>
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
      </div>
    );
  };
  
  export default Table;
  