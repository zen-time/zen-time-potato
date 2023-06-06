"use client";
import { FiSearch } from "react-icons/fi";
const SearchSquareIcon = ({
  placeholder,
  textclr,
  icon,
  iconclr,
  style,
  text,
  bg,
  border,
  radius,
  outline,
  onChange,
  onClickSearch,
  iconbg,
}) => {
  return (
    <div className="flex gap-1">
      <div
        className={`bg-${bg} w-72 p-2.5 relative flex flex-row-reverse rounded-${radius}`}
      >
        <input
          type="search"
          placeholder={placeholder}
          className={`bg-${bg} border-2 border-${border} outline-0 p-2.5 text-lg text-${textclr}`}
          onChange={onChange}
        />
        {icon ? (
          <FiSearch
            className={`absolute top-3 right-13 text-${iconclr} p-2 bg-${iconbg}-700  w-12 h-12`}
            onClick={onClickSearch}
          />
        ) : (
          text
        )}
      </div>
    </div>
  );
};

export default SearchSquareIcon;
