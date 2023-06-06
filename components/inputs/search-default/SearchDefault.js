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
  placeholderclr,
}) => {
  return (
    <div className="flex gap-1">
      <form className="inline relative" onClick={onClickSearch}>
        <input
          className={`m-2 p-2 border-2 border-${border} bg-inherit placeholder:text-${placeholderclr} text-${textclr} rounded-${radius} bg-${bg} outline-2 outline-${outline}`}
          type="search"
          placeholder={placeholder}
          onChange={onChange}
        />

        {icon ? (
          <div className={`absolute top-5 left-44 text-${iconclr}`}>
            <FiSearch onClick={onClickSearch} />
          </div>
        ) : (
          <button
            type="submit"
            className={`absolute top-2 left-56 text-${iconclr} btn-primary`}
          >
            {text ? text : "search"}
          </button>
        )}
      </form>
    </div>
  );
};

export default SearchDefault;
