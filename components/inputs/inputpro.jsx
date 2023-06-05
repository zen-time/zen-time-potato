// import "@styles/globals.css";

export const InputSuccess = ({ style, placeholder, type }) => {
  return (
    <>
      {/* 1 */}
      <input className={`${style}`} placeholder={placeholder} type={type} />
    </>
  );
};
export const InputWarning = ({ style, placeholder, type }) => {
  return (
    <>
      <input className={`${style}`} placeholder={placeholder} type={type} />
    </>
  );
};
