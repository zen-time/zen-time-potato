import { FiSearch } from "react-icons/fi";
const SearchFilled = () => {
  return (
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
    </div>
  );
};

export default SearchFilled;
