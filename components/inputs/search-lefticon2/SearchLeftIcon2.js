import { FiSearch } from "react-icons/fi";

const SearchLeftIcon2 = () => {
  return (
    <div className="flex gap-1">
      <div className="bg-white w-72 p-2.5 relative flex flex-row-reverse">
        <input
          type="search"
          placeholder="search..."
          className="bg-white border-2 border-green-700 outline-0 p-2.5 text-lg "
        />
        <FiSearch className="absolute top-3 right-13 text-white p-2 bg-green-700  w-12 h-12" />
      </div>
    </div>
  );
};

export default SearchLeftIcon2;
