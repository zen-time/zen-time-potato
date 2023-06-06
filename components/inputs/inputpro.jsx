// import "@styles/globals.css";

export const InputPro = ({ style, placeholder, type }) => {
  return (
    <>
      {/* 1 */}
      <input className={`${style}`} placeholder={placeholder} type={type} />
    </>
  );
};
