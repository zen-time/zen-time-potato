"use client";
import { FiSearch } from "react-icons/fi";
const SearchUnderline = ({
  placeholder,
  textclr,
  iconclr,
  icon,
  style,
  text,
  bg,
  border,
  radius,
  outline,
  onChange,
  onClick,
}) => {
  return (
    <div className="flex gap-1">
      <div className="inline relative">
        <input
          className={`m-2 p-2 relative border-b-2 border-b-${border} appearance-none outline-none text-${textclr}`}
          type="search"
          placeholder={placeholder}
        />
        <div className="absolute top-5 left-44 ">
          <FiSearch className={`text-${iconclr}`} />
        </div>
      </div>
    </div>
  );
};

export default SearchUnderline;
