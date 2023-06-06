"use client";
import { FiSearch } from "react-icons/fi";
const SearchRoundedIcon = ({
  placeholder,
  textclr,
  icon,
  iconclr,
  iconbg,
  bg,
  border,
  radius,
  onClickSearch,
  onChange,
}) => {
  return (
    <div className="flex gap-1">
      <div className={`bg-${bg} w-72 p-2.5 relative`}>
        <input
          type="search"
          placeholder={placeholder}
          className={`border-2 border-${border} outline-0 p-2.5 text-lg rounded-${radius} text-${textclr}`}
          onChange={onChange}
        />
        {icon && (
          <FiSearch
            className={`absolute top-5 right-4 text-${iconclr} p-2 bg-${iconbg} rounded-2xl w-8 h-8 `}
            onClick={onClickSearch}
          />
        )}
      </div>
    </div>
  );
};

export default SearchRoundedIcon;
