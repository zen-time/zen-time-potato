const Inputs = () => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center h-screen ">
      <div className=" flex items-center  mt-[1rem] w-screen px-[30rem]">
        <form>
          <label
            for="search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="grid grid-cols-2 mt-[20px] gap-5 px-[5rem]">
        <input
          type="text"
          class="bg-yellow-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30rem] p-2.5 dark:bg-yellow-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your Name"
          required
        />
        <input
          type="text"
          className="bg-red-50 border border-yellow-500 text-yellow-900 placeholder-yellow-700 text-sm rounded-lg focus:ring-yellow-500 dark:bg-yellow-100 focus:border-yellow-500 block w-[30rem] p-2.5 dark:text-black dark:placeholder-gray-500 dark:border-yellow-500  "
          placeholder="Enter your name"
          required
        />
        <input
          type="text"
          className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-[30rem] p-2.5 dark:bg-gray-700 dark:border-green-500"
          placeholder="Success input"
        />
        <input
          type="text"
          className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-[30rem] p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
          placeholder="Error input"
        />
      </div>
      <div className="mt-[2rem] flex  gap-3 px-[30rem]">
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
        <label for="vehicle1"> FrontEnd</label>
        <br></br>
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
        <label for="vehicle2"> BackEnd</label>
        <br></br>
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
        <label for="vehicle3"> FullStack</label>
        <br></br>
      </div>

      <div className="mt-[2rem] flex  gap-3 px-[30rem]">
        <label for="birthday">Birthday:</label>
        <input type="date" id="birthday" name="birthday" />
      </div>
      <div className="grid mt-[5rem] w-[20rem] justify-center gap-3">
        <input
          className="appearance-none border border-gray-300 rounded-md py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Enter your Name "
        />
        <input
          className="appearance-none border border-gray-300 rounded-md py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
          type="password"
          placeholder="xxxxx "
        />
        <input
          className=" w-[10rem] appearance-none border border-gray-300 rounded-md py-2 px-4 leading-tight focus:outline-none focus:border-blue-500 bg-blue-500"
          type="submit"
        />
      </div>
      <div className="grid mt-[5rem] w-[20rem] justify-center gap-3">
        <input
          className="appearance-none bg-black border border-gray-300 rounded-md py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="User i'd"
        />
        <input
          className="appearance-none bg-black border border-gray-300 rounded-md py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
          type="password"
          placeholder="xxxxx "
        />
        <input
          className=" w-[10rem] appearance-none border border-gray-300 rounded-md py-2 px-4 leading-tight focus:outline-none focus:border-blue-500 bg-blue-500"
          type="submit"
        />

        <input
          className="flex jsutify-between  focus:bg-[#e9f1f5]  focus:outline-dotted  placeholder:text-sm text-bold placeholder:text-[#455A64] text-center rounded-sm "
          type="text"
          placeholder="user_name"
          required
        />

        <input
          className="flex  justify focus:bg-[#e9f1f5]  focus:outline-dotted  placeholder:text-sm text-bold placeholder:text-[#455A64] text-center rounded-sm "
          type="password"
          placeholder="password"
          required
        />

        <input
          className="p-[1px] bg-[#64B5F6]  focus:border-blue-500 rounded-sm hover:bg-[#00BCD4] hover:cursor-pointer px-5 ml-[5.5rem]"
          type="submit"
        />
      </div>
    </div>

    // workouts
  );
};

export default Inputs;
