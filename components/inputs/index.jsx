const Inputs = () => {
  return (
    <div className="w-full bg-inherit mx-auto my-0 mt-10 ">
      {" "}
      <div className=" w-1/4 mx-auto my-0 flex flex-col justify-center gap-5 bg-gray-100 p-5 shadow-lg shadow-gray-500/40">
        <input
          type="password"
          placeholder="Password"
          className=" p-2  pl-4 rounded-lg bg-gray cursor-pointer border-solid outline-white"
        />
        <div>
          <label className="flex my-1 text-slate-400">Password</label>
          <input
            type="password"
            className="p-2 w-3/4 bg-transparent border-2 border-gray-200 outline-gray-300 cursor-pointer"
          />
        </div>
        <div className="my-2">
          <input
            type="password"
            placeholder="Password"
            className=" p-2 w-60 pl-4 rounded-full  cursor-pointer shadow-inner  shadow-zinc-300 outline-none"
          />
        </div>

        <hr />

        <div className="w-1/4  outline outline-zinc-200 rounded-full">
          <input
            type="radio"
            className=" cursor-pointer hover:outline-blue-400 w-7 peer/draft"
          />
          <label className="peer-checked/draft:text-sky-500">Check</label>
        </div>

        <div className=" w-1/4 pl-2 outline outline-zinc-200  hover:outline-blue-400 shadow-xl ">
          <input type="radio" className=" cursor-pointer " />
          <label className="text-md pl-1 ">Click</label>
        </div>

        <div className=" w-12 hover:w-14 relative rounded-xl  bg-gray-400 ">
          <input type="radio" className=" cursor-pointer absolute mt-1 ml-1" />
          <label className="px-5 ">OK</label>
        </div>
        <hr />
        <input type="month" className="border w-1/2 border-slate-300" />
      </div>
    </div>
  );
};
export default Inputs;
