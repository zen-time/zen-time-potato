import { FiSearch } from "react-icons/fi";
const SearchUnderline = () => {
  return (
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
    </div>
  );
};

export default SearchUnderline;
