import { FiSearch } from "react-icons/fi";
import { IoMicOutline } from "react-icons/io5";
const SearchIconsLeftRight = () => {
  return (
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
    </div>
  );
};

export default SearchIconsLeftRight;
