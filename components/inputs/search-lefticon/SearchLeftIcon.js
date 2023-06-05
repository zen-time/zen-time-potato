import { FiSearch } from "react-icons/fi";

const SearchLeftIcon = () => {
  return (
    <div className="flex gap-1">
      <div className="bg-white w-72 p-2.5 relative">
        <input
          type="search"
          placeholder="search..."
          className="bg-white border-2 border-green-700 outline-0 p-2.5 text-lg rounded-3xl"
        />
        <FiSearch className="absolute top-5 right-14 text-white p-2 bg-green-700 rounded-2xl w-8 h-8 " />
      </div>
    </div>
  );
};

export default SearchLeftIcon;
