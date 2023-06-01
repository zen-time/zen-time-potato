const InputField = () => {
  return (
    <div className="w-full bg-inherit mx-auto my-0 mt-10 ">
      {" "}
      <div className=" w-1/4 mx-auto my-0 flex flex-col justify-center gap-5 bg-gray-100 p-5 shadow-lg shadow-gray-500/40">
        {/* first */}
        <input
          type="password"
          placeholder="Password"
          className=" p-2  pl-4 rounded-lg bg-gray cursor-pointer border-solid outline-white"
        />
        {/* second */}
        <div>
          <label className="flex my-1 text-slate-400">Password</label>
          <input
            type="password"
            className="p-2 w-3/4 bg-transparent border-2 border-gray-200 outline-gray-300 cursor-pointer"
          />
        </div>
        {/* third */}
        <div className="my-2">
          <input
            type="password"
            placeholder="Password"
            className=" p-2 w-60 pl-4 rounded-full  cursor-pointer shadow-inner  shadow-zinc-300 outline-none"
          />
        </div>
        {/* fourth */}
        <div className="my-2">
          <input
            type="password"
            placeholder="Password"
            className=" p-2 w-80 pl-4   cursor-pointer hover:ring-2 ring-blue-500/50 outline-none rounded-sm shadow-lg "
          />
        </div>
        <div className="my-2">
          <input
            type="password"
            placeholder="Password"
            className=" p-2 w-60 border-b-2 bg-gray-100 outline-none border-gray-500 "
          />
        </div>
        <hr />
        {/* first */}
        <div className="w-1/4 m-2 outline outline-zinc-200 rounded-full">
          <input
            type="radio"
            className=" cursor-pointer hover:outline-blue-400 w-7 peer/draft"
          />
          <label className="peer-checked/draft:text-sky-500">Check</label>
        </div>
        {/* second */}
        <div className=" w-1/4 pl-2 m-2 outline outline-zinc-200 transition-transform hover:-translate-x-1 hover:outline-blue-300 shadow-xl ">
          <input type="radio" className=" cursor-pointer " />
          <label className="text-md pl-1 ">Click</label>
        </div>
        {/* third */}
        <div className=" w-14 m-2 transition ease-in-out delay-150 hover:w-14 relative rounded-xl  bg-gray-400 hover:-translate-y-1 hover:duration-300">
          <input type="radio" className=" cursor-pointer absolute mt-1 ml-1" />
          <label className="px-5 ">OK</label>
        </div>

        {/* fourth */}
        <div className="w-6/12 bg-slate-100 border-collapse border-spacing-3">
          <label className="p-1 border border-slate-300 shadow-inner shadow-zinc-300">
            <input type="radio" name="radio" />
            Yes
          </label>
          <label className="p-1 border border-slate-300 shadow-inner shadow-zinc-100">
            <input type="radio" name="radio" />
            No
          </label>
        </div>
        <hr />
        <input type="month" className="border w-1/2 border-slate-300" />
      </div>
    </div>
  );
};
export default InputField;
