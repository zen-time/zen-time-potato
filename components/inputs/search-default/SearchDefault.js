import { FiSearch } from "react-icons/fi";
const SearchDefault = ({
  placeholder,
  textclr,
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
          className={`appearance-none ${
            style ? style : "search-default"
          } border-[${border}] bg-[${bg}] outline-[${outline}]`}
          type="search"
          placeholder={placeholder}
          onChange={onChange}
        />
        <div className="absolute top-5 left-44 text-gray-600 ">
          <FiSearch onClick={onClick} />
        </div>
      </div>
    </div>
  );
};

export default SearchDefault;
