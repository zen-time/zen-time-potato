const ReusableInputComponent = (props) => {
  const {
    id,
    type,
    value,
    name,
    required,
    style,
    min,
    max,
    minLength,
    maxLength,
    autoComplete,
    pattern,
    size,
    list,
    label,
    placeholder,
  } = props;
  return (
    <>
      {type === "search" && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        type={type}
        value={value}
        name={name}
        style={style}
        min={min}
        max={max}
        list={list}
        className={style}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        autoComplete={autoComplete}
        pattern={pattern}
        size={size}
        required
      />
      {type !== "search" && (
        <label htmlFor={id} className={{ style }}>
          {label}
        </label>
      )}
    </>
  );
};

export default ReusableInputComponent;
