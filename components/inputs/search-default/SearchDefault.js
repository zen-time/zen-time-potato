"use client";
import { FiSearch } from "react-icons/fi";

const SearchDefault = ({
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
}) => {
  return (
    <div className="flex gap-1">
      <div className="inline relative">
        <input
          className={`appearance-none ${
            style ? style : "search-default"
          } border-[${border}] bg-[${bg}] outline-[${outline}]`}
          type="search"
          placeholder={placeholder}
          onChange={onChange}
        />
        <div className="absolute top-5 left-44 text-gray-600 ">
          <FiSearch onClick={onClickSearch} />
        </div>
      </div>
    </div>
  );
};

export default SearchDefault;
