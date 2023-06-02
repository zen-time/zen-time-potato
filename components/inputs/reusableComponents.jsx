import React from "react";

const reusableComponents = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      {/* username */}
      <div className="relative">
        <input
          id="username"
          className="border-b focus:outline-none  py-1  focus:border-purple-600  focus:border-b-2 transition-colors  peer"
          type="text"
          autoComplete="off"
        />
        <label
          htmlFor="username"
          className="absolute left-0  focus:text-purple-600 top-1 cursor-text peer-focus:text-[0.8rem] peer-focus:-top-3 peer-focus:text-purple-600 text-gray-600"
        >
          Username
        </label>
      </div>
      {/* password */}
      <div className="relative">
        <input
          id="password"
          className="border-b focus:outline-none  py-1  focus:border-purple-600  focus:border-b-2 transition-colors  peer"
          type="password"
          autoComplete="off"
        />
        <label
          htmlFor="password"
          className="absolute left-0  focus:text-purple-600 top-1 cursor-text peer-focus:text-[0.8rem] peer-focus:-top-3 peer-focus:text-purple-600 text-gray-600"
        >
          xxxx
        </label>
      </div>
      {/* date */}
      <div className="relative">
        <input
          id="date"
          className="border-b focus:outline-none  py-1  focus:border-purple-600  focus:border-b-2 transition-colors  peer"
          type="date"
          autoComplete="off"
        />
        <label
          htmlFor="date"
          className="absolute left-0  focus:text-purple-600 top-1 cursor-text peer-focus:text-[0.8rem] peer-focus:-top-3 peer-focus:text-purple-600 text-gray-600"
        ></label>
      </div>
    </div>
  );
};

export default reusableComponents;
