import { FiSearch } from "react-icons/fi";

const SearchOutline = ({
  placeholder,
  icon,
  text,
  textclr,
  style,
  bg,
  outline,
  border,
}) => {
  return (
    <div className="flex gap-1">
      <div className="inline relative">
        <input
          className={`${style} ${bg && `bg-[${bg}]`} ${
            outline &&
            `outline-2 outline-[${outline}] ${
              border && `border-2 border-[${border}]`
            }`
          } ${textclr && `text-[${textclr}]`}`}
          type="search"
          placeholder={placeholder}
        />
        <div className="absolute top-5 left-44 text-gray-600 ">
          {icon ? <FiSearch /> : text ? text : ""}
        </div>
      </div>
      <h1 className={`bg-[${bg}] text-[${textclr}]`}>hai</h1>
    </div>
  );
};

export default SearchOutline;
