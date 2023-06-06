"use client";
import { FiSearch } from "react-icons/fi";

const SearchNormal = ({
  placeholder,
  textclr,
  icon,
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
    <form className="flex gap-1" onSubmit={onClickSearch}>
      <input
        type="search"
        placeholder={placeholder}
        className={`${
          style ? style : "defaultSearch"
        } flex-1 outline-${outline} font-semibold text-md rounded-${radius} bg-${bg} text-${textclr} pl-4 appearance-none `}
        onChange={onChange}
      />
      <button type="submit" className={`btn-primary bg-${[bg]}`}>
        {icon ? <FiSearch className="text-2xl" /> : text ? text : ""}
      </button>
    </form>
  );
};

export default SearchNormal;
