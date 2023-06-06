"use client";
import { FiSearch } from "react-icons/fi";
const SearchRoundedIcon = ({
  placeholder,
  textclr,
  icon,
  iconclr,
  iconbg,
  style,
  text,
  bg,
  border,
  radius,
  outline,
  onClickSearch,
  onChange,
}) => {
  return (
    <div className="flex gap-1">
      <div className={`bg-${bg} w-72 p-2.5 relative`}>
        <input
          type="search"
          placeholder={placeholder}
          className={`bg-${bg} border-2 border-${border} outline-0 p-2.5 text-lg rounded-${radius} text-${textclr}`}
          onChange={onChange}
        />
        {icon && (
          <FiSearch
            className={`absolute top-5 right-5 text-${iconclr} p-2 bg-${iconbg} rounded-2xl w-8 h-8 `}
            onClick={onClickSearch}
          />
        )}
      </div>
    </div>
  );
};

export default SearchRoundedIcon;
