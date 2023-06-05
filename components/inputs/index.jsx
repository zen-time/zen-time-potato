// import React from "react";

// const index = () => {
//   return <div>index</div>;

// import Inputs from "./Inputs";
// const index = () => {
//   return (
//     <div>
//       <Inputs />
//     </div>
//   );
// };

// export default index;

export const OutLineSearchbar = () => {
  return (
    <div className="   w-80 px-14 border-indigo-200 border-2 py-2 relative flex items-center bg-indigo-400">
      <input
        type="search"
        placeholder="search..."
        className="bg-white border-2 border-red-700 outline-0 p-2.5 text-lg rounded-3xl"
      />
    </div>
  );
};

export const NormalSearchBar = () => {
  return (
    <div className="   w-80 px-14 border-indigo-200 border-2 py-2 relative flex items-center bg-indigo-400">
      <input
        type="search"
        placeholder="search..."
        className="bg-white border-2 border-blue-700 outline-0 p-2.5 text-lg rounded-3xl"
      />
    </div>
  );
};

export const BgSearchBar = () => {
  return (
    <div className="   w-80 px-14 border-indigo-200 border-2 py-2 relative flex items-center bg-indigo-400">
      <input
        type="search"
        placeholder="search..."
        className="bg-white border-2 border-blue-700 outline-0 p-2.5 text-lg rounded-3xl"
      />
    </div>
  );
};
