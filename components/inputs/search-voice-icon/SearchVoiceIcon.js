"use client";
import { FiSearch } from "react-icons/fi";
import { IoMicOutline } from "react-icons/io5";

const SearchVoiceIcon = ({
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
  onClicksearch,
  onClickMic,
}) => {
  return (
    <div className="flex gap-1">
      <div
        className={`bg-${bg} w-80 px-14 border-${border}-700 border-2 py-1 relative flex items-center`}
      >
        <FiSearch
          className={`absolute left-2  text-${iconclr} w-6 h-6`}
          onClick={onClicksearch}
        />
        <input
          type="search"
          placeholder="search..."
          className={`bg-${bg}  outline-0 p-2 text-lg rounded-3xl text-${textclr}`}
          onChange={onChange}
        />
        <IoMicOutline
          className={`w-6 h-6  text-${iconclr} absolute right-1`}
          onClick={onClickMic}
        />
      </div>
    </div>
  );
};

export default SearchVoiceIcon;
