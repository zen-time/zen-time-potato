import Image from "next/image"

const EmployeeDetails = ()=>{
    const Workers = [
        {
            id:1,
            Name:"Andrew Mike",
            "Job Position":"Develop",
            Since:2013,
            Salary:"99,225",

        },
        {
            id:2,
            Name:"John Doe",
            "Job Position":"Design",
            Since:2012,
            Salary:"89,213",


        }, {
            id:3,
            Name:"Alex Mike",
            "Job Position":"Design",
            Since:2010,
            Salary:"92,144",


        }, 
    ]
    return(
        <div className="w-full h-screen flex justify-center items-center ">
            
            <div className="bg-white rounded-md p-5 border-green-600">
            <div >
                <h2 className="text-4xl font-bold p-4 text-red-600">WORKERS DETAILS</h2>
            </div>
            <table className="w-[55rem] h-52   p-5 border-2 border-green-600 border-separate border-spacing-2">
                <thead>
                    <tr>
                        <th className="p-5 text-gray-500 text-xl">#</th>
                        <th className="text-gray-500 text-xl">Name</th>
                        <th className="text-gray-500 text-xl">Job Position</th>
                        <th className="text-gray-500 text-xl">Since</th>
                        <th className="text-gray-500 text-xl">Salary</th>
                        <th className="text-gray-500 text-xl">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Workers.map((val,key)=>{
                        return (
                          <tr key={key} className="hover:bg-slate-100">
                            <td className="text-center  border-green-500  p-5 text-gray-400">
                              {val.id}.
                            </td>
                            <td className="text-center   text-gray-400">
                              {val.Name}
                            </td>
                            <td className="text-center  text-gray-400">
                              {val["Job Position"]}
                            </td>
                            <td className="text-center  text-gray-400">
                              {val.Since}
                            </td>
                            <td className="text-center  text-gray-400">
                              ${val.Salary}
                            </td>
                            <td className="text-center  p-5 text-cyan-600 text-2xl flex justify-center items-center gap-2 hover:cursor-pointer">
                              <Image
                                src="/assets/images/contact.png"
                                alt="contact-img"
                                width={30}
                                height={30}
                                // className="shadow-indigo-500/50"
                              />
                              <Image
                                src="/assets/images/edit.png"
                                alt="contact-img"
                                width={33}
                                height={30}
                                // className="shadow-lg shadow-cyan-500/50"
                              />
                              <Image
                                src="/assets/images/close.png"
                                alt="contact-img"
                                width={33}
                                height={30}
                              />
                            </td>
                          </tr>
                        );
                    })}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default EmployeeDetails;