const SearchLeftText = () => {
  return (
    <div className="flex gap-1">
      <div className="bg-white w-72 p-2.5 relative flex flex-row-reverse">
        <input
          type="search"
          placeholder="search..."
          className="bg-white border-2 border-indigo-700 outline-0 p-2.5 text-lg "
        />
        <button className="absolute top-3 right-13 text-white p-2 bg-indigo-700  w-18 h-12">
          Go
        </button>
      </div>
    </div>
  );
};

export default SearchLeftText;
