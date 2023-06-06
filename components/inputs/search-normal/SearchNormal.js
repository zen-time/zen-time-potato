"use client";
import { FiSearch } from "react-icons/fi";

const SearchNormal = ({
  placeholder,
  textclr,
  iconclr,
  bg,
  border,
  radius,
  onClickSearch,
  onChange,
}) => {
  return (
    <form className="flex gap-1" onSubmit={onClickSearch}>
      <div className="flex gap-1">
        <div
          className={`bg-${bg} w-80 px-14 border-${border} border-2 py-2 relative flex items-center `}
        >
          <FiSearch
            className={`absolute left-0  p-2 text-${iconclr} w-12 h-12`}
          />
          <input
            type="search"
            placeholder={placeholder}
            className={`bg-${bg} border-2 border-${border} outline-0 p-2.5 text-lg text-${textclr} rounded-${radius} `}
            onChange={onChange}
          />
        </div>
      </div>
    </form>
  );
};

export default SearchNormal;
