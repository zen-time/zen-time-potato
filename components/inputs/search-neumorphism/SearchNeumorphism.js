"use client";
import { FiSearch } from "react-icons/fi";
const SearchNeumorphism = ({
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
      <form onSubmit={onClickSearch}>
        <div
          className={`p-2 bg-${bg}-50 w-60 shadow-md flex items-center justify-between rounded-${radius}`}
        >
          <input
            type="search"
            placeholder={placeholder}
            className={`flex-1 outline-none font-semibold text-md bg-inherit text-${textclr}`}
            onChange={onChange}
          />
          <button type="submit" className="">
            {icon && <FiSearch className={`text-2xl text-${iconclr}`} />}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchNeumorphism;
