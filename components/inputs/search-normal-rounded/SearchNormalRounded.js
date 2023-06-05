import { FiSearch } from "react-icons/fi";

const SearchNormalRounded = () => {
  return (
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
    </div>
  );
};

export default SearchNormalRounded;
