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
        <div>
          <input
            type="radio"
            className=" border-slate-300 outline-none  cursor-pointer hover:outline-blue-400"
          />
          <input
            type="radio"
            className=" border-slate-300 outline-none w-12 cursor-pointer rounded-full"
          />
        </div>

        <hr />
        <input type="month" className="border border-slate-300" />
      </div>
    </div>
  );
};
export default Inputs;
