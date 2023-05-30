"use client";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoMicOutline } from "react-icons/io5";
import { RiFileCopy2Line } from "react-icons/ri";

const Inputs = () => {
  const [size, setsize] = useState();
  const [borderRadius, setBorderRadius] = useState();
  const [fontSize, setFontSize] = useState();
  const [bg, setBg] = useState();
  const [placeholder, setPlaceholder] = useState();
  const [fieldShow, setFieldShow] = useState();
  const [slide, setSlide] = useState();

  return (
    <>
      <nav className="bg-white shadow-xl flex justify-between items-center p-2 ">
        <div className="w-36 h-16">
          <img
            className="cursor-pointer"
            src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png"
            alt="logo"
            width="100%"
            height="100%"
          />
        </div>
        <div className="bg-white w-72 p-2.5 relative">
          <input
            type="search"
            placeholder="search..."
            className="bg-white border-2 border-indigo-700 outline-0 p-2.5 text-lg rounded-3xl"
          />
          <FiSearch className="absolute top-5 right-14 text-white p-2 bg-indigo-500 rounded-2xl w-8 h-8 " />
        </div>

        <ul className="flex items-center gap-5 ">
          <li className="cursor-pointer hover:border-b-2  hover:border-b-indigo-500 hover:animate-bounce transition ease-in-out delay-150">
            Home
          </li>
          <li className="cursor-pointer hover:border-b-2 hover:border-b-indigo-500 hover:animate-bounce transition ease-in-out delay-150">
            Services
          </li>
          <li className="cursor-pointer hover:border-b-2 hover:border-b-indigo-500 hover:animate-bounce transition ease-in-out delay-150">
            Contact-Us
          </li>
          <li className="cursor-pointer hover:border-b-2 hover:border-b-indigo-500 hover:animate-bounce transition ease-in-out delay-150">
            Components
          </li>
        </ul>
        <div className="flex items-center gap-5 ">
          <button className="bg-gradient-to-r from-indigo-500 p-2 hover:bg-gradient-to-l text-white rounded-lg">
            Login
          </button>
          <button className=" h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg p-4 hover:bg-gradient-to-l text-white">
            Create An Account
          </button>
        </div>
      </nav>

      <main className="grid grid-cols-8 gap-4 flex justify-around w-full p-10">
        <aside className="col-span-2 border-r-4 border-slate-600">
          <div className="   w-80 px-14 border-indigo-200 border-2 py-2 relative flex items-center bg-indigo-400">
            <FiSearch className="absolute left-0  p-2 text-blue-800 w-12 h-12" />
            <input
              type="search"
              placeholder="search..."
              className="bg-white border-2 border-blue-700 outline-0 p-2.5 text-lg rounded-3xl"
            />
          </div>
          <h4 className="text-lg font-bold my-6">Input</h4>
          <ul className="flex flex-col gap-4">
            <li className="hover:bg-slate-200 hover:text-slate-600 w-20  p-2 ">
              search
            </li>
            <li className="hover:bg-slate-200 hover:text-slate-600 w-20  p-2 ">
              range
            </li>
            <li className="hover:bg-slate-200 hover:text-slate-600 w-20  p-2 ">
              date
            </li>
          </ul>
        </aside>
        <article className="col-span-6">
          <h3 className="text-3xl ">
            Search-Bar <small>Designs</small>
          </h3>
          <hr className="border-2 m-2" />
          <small className="">Different styles of search bar</small>
          <section className="border-2 border-gray-500 p-2 mb-5 flex items-center justify-between flex-wrap gap-4">
            <div className="flex gap-1">
              <div className="bg-white w-72 p-2.5 relative flex flex-row-reverse">
                <input
                  type="search"
                  placeholder="search..."
                  className="bg-white border-2 border-green-700 outline-0 p-2.5 text-lg "
                />
                <button className="absolute top-3 right-13 text-white p-2 bg-green-700  w-18 h-12">
                  SEARCH
                </button>
              </div>
              <div>
                <RiFileCopy2Line className="cursor-pointer" />
              </div>
            </div>
            <div className="flex gap-1">
              <div className="inline relative">
                <input
                  className="m-2 p-2 relative border-b-2 border-b-slate-500 appearance-none outline-none"
                  type="search"
                  placeholder="Search..."
                />
                <div className="absolute top-5 left-44 ">
                  <FiSearch />
                </div>
              </div>
              <div className="">
                <RiFileCopy2Line />
              </div>
            </div>
            <div className="flex gap-1">
              <div className="inline relative">
                <input
                  className="m-2 p-2 border-2 border-stone-800 bg-inherit placeholder:text-gray-600 focus:outline-none text-gray-500"
                  type="search"
                  placeholder="Search..."
                />
                <div className="absolute top-5 left-44 text-gray-600 ">
                  <FiSearch />
                </div>
              </div>
              <div>
                <RiFileCopy2Line />
              </div>
            </div>
            <div className="flex gap-1">
              <div className="bg-rose-100 p-2  flex w-72">
                <input
                  className="bg-rose-200 p-2 shadow-2xl outline-none"
                  type="search"
                  placeholder="Search..."
                />
                <button className=" bg-rose-600 w-full flex items-center justify-center text-2xl">
                  <FiSearch className="text-rose-800 " />
                </button>
              </div>
              <div>
                <RiFileCopy2Line />
              </div>
            </div>
            <div className="flex gap-1">
              <form>
                <div className="p-2 bg-slate-50 w-60 shadow-md flex items-center justify-between ">
                  <input
                    type="search"
                    placeholder="Search..."
                    className="flex-1 outline-none font-semibold text-md bg-inherit"
                  />
                  <button type="submit" className="">
                    <FiSearch className="text-2xl" />
                  </button>
                </div>
              </form>
              <div>
                <RiFileCopy2Line />
              </div>
            </div>
            <div className="flex gap-1">
              <form>
                <div className="p-2  bg-slate-50 w-60 shadow-md flex items-center justify-between rounded-3xl ">
                  <input
                    type="search"
                    placeholder="Search..."
                    className="flex-1 outline-none font-semibold text-md bg-inherit p-1"
                  />
                  <button type="submit" className="">
                    <FiSearch className="text-2xl" />
                  </button>
                </div>
              </form>
              <div>
                <RiFileCopy2Line />
              </div>
            </div>
            <div className="flex gap-1">
              <div className="bg-white w-72 p-2.5 relative">
                <input
                  type="search"
                  placeholder="search..."
                  className="bg-white border-2 border-green-700 outline-0 p-2.5 text-lg rounded-3xl"
                />
                <FiSearch className="absolute top-5 right-14 text-white p-2 bg-green-700 rounded-2xl w-8 h-8 " />
              </div>
              <div>
                <RiFileCopy2Line />
              </div>
            </div>
            <div className="flex gap-1">
              <div className="bg-white w-72 p-2.5 relative flex flex-row-reverse">
                <input
                  type="search"
                  placeholder="search..."
                  className="bg-white border-2 border-green-700 outline-0 p-2.5 text-lg "
                />
                <FiSearch className="absolute top-3 right-13 text-white p-2 bg-green-700  w-12 h-12" />
              </div>
              <div>
                <RiFileCopy2Line />
              </div>
            </div>
            <div className="flex gap-1">
              <div className="bg-white w-72 p-2.5 relative flex flex-row-reverse">
                <input
                  type="search"
                  placeholder="search..."
                  className="bg-white border-2 border-indigo-700 outline-0 p-2.5 text-lg "
                />
                <button className="absolute top-3 right-13 text-white p-2 bg-indigo-700  w-18 h-12">
                  Go
                </button>
              </div>
              <div>
                <RiFileCopy2Line />
              </div>
            </div>
            <div className="flex gap-1">
              <div className="bg-white w-80 px-14 border-indigo-200 border-2 py-2 relative flex items-center bg-blue-400">
                <FiSearch className="absolute left-0  p-2 text-blue-800 w-12 h-12" />
                <input
                  type="search"
                  placeholder="search..."
                  className="bg-white border-2 border-blue-700 outline-0 p-2.5 text-lg "
                />
              </div>
              <div>
                <RiFileCopy2Line />
              </div>
            </div>
            <div className="flex gap-1">
              <div className="bg-white w-80 px-14 border-zinc-700 border-2 py-1 relative flex items-center rounded-3xl">
                <FiSearch className="absolute left-2  text-zinc-400 w-6 h-6" />
                <input
                  type="search"
                  placeholder="search..."
                  className="bg-white  outline-0 p-2 text-lg rounded-3xl "
                />
                <IoMicOutline className="w-6 h-6  text-zinc-400 absolute right-1" />
              </div>
              <div>
                <RiFileCopy2Line />
              </div>
            </div>
            <div className="flex gap-1">
              <div className="bg-white w-80 px-14 border-zinc-700 border-2 py-1 relative flex items-center">
                <FiSearch className="absolute left-2  text-zinc-400 w-6 h-6" />
                <input
                  type="search"
                  placeholder="search..."
                  className="bg-white  outline-0 p-2 text-lg rounded-3xl "
                />
                <IoMicOutline className="w-6 h-6  text-zinc-400 absolute right-1" />
              </div>
              <div>
                <RiFileCopy2Line />
              </div>
            </div>
            {/* <div className="flex gap-1">
              <div>
                <RiFileCopy2Line />
              </div>
            </div> */}
          </section>
          <h3 className="text-3xl ">
            Range <small>Designs</small>
          </h3>
          <hr className="border-2 m-2" />
          <small className="">Different styles of Range</small>
          <section className="border-2 border-gray-500 p-2 flex items-center justify-between flex-wrap gap-4">
            <div className="flex gap-2">
              <div className="bg-white shadow-lg px-4 py-2">
                <input type="range" min="0" max="100" step="0" />
              </div>
              <div>
                <RiFileCopy2Line />
              </div>
            </div>
            <div className="flex gap-2">
              <div>
                <div className="bg-white w-48 shadow-lg px-4 py-2 rounded-lg flex items-center gap-2 ">
                  <input
                    className="appearance-none h-1 bg-purple-500    [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-purple-500"
                    type="range"
                    min="0"
                    max="100"
                    step="0"
                    onChange={(e) => setSlide(e.target.value)}
                    onMouseMove={(e) => setSlide(e.target.value)}
                  />
                  <span>{slide}</span>
                </div>
              </div>
              <div>
                <RiFileCopy2Line />
              </div>
            </div>
            <div className="flex gap-2">
              <div>
                <div className="bg-white w-48 shadow-lg px-4 py-2 rounded-lg flex items-center gap-2 ">
                  <input
                    className="relative appearance-none h-1 bg-green-500    [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5  [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-green-500  "
                    type="range"
                    min="0"
                    max="100"
                    step="0"
                    onChange={(e) => setSlide(e.target.value)}
                    onMouseMove={(e) => setSlide(e.target.value)}
                  />
                  <small className=" text-xs absolute top-5 left-0">
                    {slide}
                  </small>
                </div>
              </div>
              <div>
                <RiFileCopy2Line />
              </div>
            </div>

            <div className="bg-white shadow-lg px-4 py-2">
              <div>
                <input type="range" min="0" max="100" step="0" />
              </div>
            </div>
            <input type="range" min="0" max="100" step="10" />
            <input type="range" min="0" max="100" step="25" />
            <input type="range" min="0" max="100" step="50" />
            <input type="range" min="0" max="100" step="0" />
          </section>
        </article>
      </main>
    </>
  );
};

export default Inputs;
