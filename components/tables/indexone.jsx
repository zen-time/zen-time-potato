'use client'

// import { useState } from "react";
import { useState } from "react";

const IndexOne = ()=>{

  const data = [
    { Name: "Dheena", Role: "Full Stack Developer", Age: 20,experience:"5 Years", Gender: "Male" },
    { Name: "Bhuvana", Role: "Java Developer", Age: 21, experience:"5 year", Gender: "FeMale" },
    { Name: "Abijith", Role: "JavaScriptDeveloper", Age: 21,experience:"4 year", Gender: "Male" },
    { Name: "Arun", Role: "Front End Developer",experience:"7 year", Age: 25, Gender: "Male" },

  
  ];

  // const [currentPage,setCurrentPage] = useState(1);
  // const recordsPerPage = 5;
  // const lastIndex = currentPage * recordsPerPage;
  // const firstIndex = lastIndex - recordsPerPage;
  // const records = data.slice(firstIndex.lastIndex);
  // const npage = Math.ceil(data.length / recordsPerPage)
  // const numbers =[...Array(npage + 1).keys()].slice(1)

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
       <div>
        <h1 className="text-4xl font-bold p-4 text-red-600">STREAMS SOFTWARE SOLUTIONS</h1>
      </div>
      <table className=" w-[55rem] h-52  shadow-md rounded-lg border-spacing-y-24">
        <thead className="p-[5rem]">
          <tr className="bg-black text-white font-bold rounded-lg ">
            <th className="p-5">NAME</th>
            <th className="">ROLE</th>
            <th>Experience</th>
            <th className="">AGE</th>
            <th className="">GENDER</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, key) => {
            return (
              <tr key={key} className="hover:bg-slate-100 ">
                <td className="text-center border-x-2 p-3">{val.Name}</td>
                <td className="text-center border-x-2">{val.Role}</td>
                <td className="text-center border-x-2 p-3">{val.experience}</td>
                <td className="text-center border-x-2">{val.Age}</td>
                <td className="text-center border-x-2">{val.Gender}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    
      {/* <nav>
        <ul className="pagination flex justify-between items-center gap-5 mt-5  ">
          <li className="page-item p-1 px-2  bg-cyan-500 text-white font-bold">
            <a href="#" className="page-link" onClick={prevpage}>
              Prev
            </a>
          </li>
          {numbers.map((n, i) => (
            <li className={`page-item ${currentPage == n ? 'active' :''} font-bold`} key={i}>
              <a href="#" className="page-link text-blue-500"  onClick={()=>changeCPage(n)}>
                {n}
              </a>
            </li>
          ))}
          <li className="page-item p-1 px-2 bg-cyan-500 text-white font-bold">
            <a href="#" className="page-link" onClick={nextpage}>
              Next
            </a>
          </li>
        </ul>
      </nav> */}

    </div>
    
  );
  // function nextpage(){
  //   if (currentPage !== lastIndex) {
  //     setCurrentPage(currentPage + 1)
  //   }
  // }
  // function changeCPage(id){
  //   setCurrentPage(id)
  // }
  // function prevpage(){
  //   if(currentPage !== firstIndex){
  //     setCurrentPage(currentPage - 1)
  //   }
  // }
};

export default IndexOne;