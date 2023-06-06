const Search = ({ bg, textclr, radius, border, outline }) => {
  return (
    <form>
      <div>
        <input
          type="search"
          id="mySearch"
          name="q"
          className={`bg-${bg} text-${textclr} px-3 text-xl m-2 outline-2 outline-${outline} border-2 border-${border} py-4 rounded-${radius}`}
        />
        <button className="">Search</button>
      </div>
    </form>
  );
};

export default Search;
