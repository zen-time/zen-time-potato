"use client";
import { FiSearch } from "react-icons/fi";

const SearchOutline = ({
  placeholder,
  icon,
  iconclr,
  text,
  textclr,
  bg,
  outline,
  border,
  radius,
}) => {
  return (
    <div className="flex gap-1">
      <div className="inline relative">
        <input
          className={` m-2 p-2 border-2 bg-${bg} border-${border}  placeholder:text-gray-600 focus:outline-${outline} text-${textclr} rounded-${radius}`}
          type="search"
          placeholder={placeholder}
        />
        <div className="absolute top-5 left-44 text-gray-600 ">
          {icon ? (
            <FiSearch className={`text-${iconclr}`} />
          ) : text ? (
            <p>{text}</p>
          ) : (
            "text"
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchOutline;
