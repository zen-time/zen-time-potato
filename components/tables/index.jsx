'use client'

// import { useState } from "react";
import { useState } from "react";

const Index = ()=>{

  const data = [
    { Name: "Dheena", Role: "Full Stack Developer", Age: 20, Gender: "Male",experience: "5 years" },
    { Name: "Bhuvana", Role: "Java Developer", Age: 21, Gender: "FeMale", experience:"1 year" },
    { Name: "Abijith", Role: "JavaScriptDeveloper", Age: 21, Gender: "Male", experience:"5 year" },
    { Name: "Arun", Role: "Front End Developer", Age: 25, Gender: "Male", experience:"4 year" },
    { Name: "Manoj", Role: "UI & UX Developer", Age: 25, Gender: "Male", experience:"4 year" },
    { Name: "Akash", Role: "React Developer", Age: 24, Gender: "Male", experience:"3 year" },
    { Name: "Vishnu", Role: "Angular Developer", Age: 25, Gender: "Male", experience:"8 year" },
    { Name: "Kesavan", Role: "Next js Developer", Age: 25, Gender: "Male", experience:"10 year" },
    { Name: "Naveen", Role: "Back End Developer", Age: 25, Gender: "Male", experience:"6 year" },
  
  ];

  // const [currentPage,setCurrentPage] = useState(1);
  // const recordsPerPage = 5;
  // const lastIndex = currentPage * recordsPerPage;
  // const firstIndex = lastIndex - recordsPerPage;
  // const records = data.slice(firstIndex.lastIndex);
  // const npage = Math.ceil(data.length / recordsPerPage)
  // const numbers =[...Array(npage + 1).keys()].slice(1)

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center flex-col">
        <div>
          <h1 className="text-4xl font-bold p-4">
            <span className="text-red-500">STREAMS</span> EMPLOYEE DETAILS
          </h1>
        </div>
        <table className="min-w-[55rem] h-52  shadow-md rounded-lg p-5">
          <thead>
            <tr className="bg-slate-200 rounded-lg ">
              <th className="p-5">NAME</th>
              <th className="">ROLE</th>
              <th>EXPERIENCE</th>
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
                  <td className="text-center border-x-2">{val.experience}</td>
                  <td className="text-center border-x-2">{val.Age}</td>
                  <td className="text-center border-x-2">{val.Gender}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* <nav>
          <ul className="pagination flex justify-between items-center gap-5 mt-5  ">
            <li className="page-item p-1 px-2 bg-slate-500 text-white font-bold">
              <a href="#" className="page-link" onClick={prevpage}>
                Prev
              </a>
            </li>
            {numbers.map((n, i) => (
              <li
                className={`page-item ${
                  currentPage == n ? "active" : ""
                } font-bold`}
                key={i}
              >
                <a
                  href="#"
                  className="page-link text-blue-500"
                  onClick={() => changeCPage(n)}
                >
                  {n}
                </a>
              </li>
            ))}
            <li className="page-item p-1 px-2  bg-slate-500 text-white font-bold">
              <a href="#" className="page-link" onClick={nextpage}>
                Next
              </a>
            </li>
          </ul>
        </nav> */}
      </div>
      {/* <div>
        <button onClick={() => previousePage()} disabled={!canPreviousePage}>
          previous
        </button>
        <button onClick={() => nextpage()} disabled={!canNextPage}>
          next
        </button>
      </div> */}
    </>
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

export default Index;