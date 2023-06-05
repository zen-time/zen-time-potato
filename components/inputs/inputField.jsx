const InputField = ({
  label,
  type,
  placeholder,
  style,
  input_fill,
  input_shadow,
  input_hover,
  input_borderBottom,
  input_type_radio,
  input_radio,
  input_shadow_section,
  input_radio_label,
  input_radio_container,
  input_radio_normal,
  input_radio_normal_label,
  input_radio_hover_section,
  input_radio_hover,
  input_radio_hover_label,
  input_radio_toggle_section,
  input_radio_toggle_label_yes,
  input_radio_toggle_label_no,
  input_month,
  name,
}) => {
  return (
    <div className="w-full bg-inherit mx-auto my-0 mt-10 ">
      {" "}
      <div className=" w-1/4 mx-auto my-0 flex flex-col justify-center gap-5 bg-gray-100 p-5 shadow-lg shadow-gray-500/40">
        {/* first */}
        <input type={`${type}`} className={`${input_fill}`} />
        {/* second field */}
        <label className={`${label}`}>{placeholder}</label>
        <input type={`${type}`} className={`${style}`} />

        {/* third */}
        <input
          type={`${type}`}
          placeholder={`${placeholder}`}
          className={`${input_shadow}`}
        />

        {/* fourth */}

        <input
          type={`${type}`}
          placeholder={`${placeholder}`}
          className={`${input_hover}`}
        />
        {/* five'th */}
        <input
          type={`${type}`}
          placeholder={`${placeholder}`}
          className={`${input_borderBottom}`}
        />

        <hr />
        {/* first */}

        <div className={`${input_shadow_section}`}>
          <input type={`${input_type_radio}`} className={`${input_radio}`} />
          <label className={`${input_radio_label}`}>Check</label>
        </div>
        {/* second */}
        <div className={`${input_radio_container}`}>
          <input
            type={`${input_type_radio}`}
            className={`${input_radio_normal}`}
          />
          <label className={`${input_radio_normal_label}`}>Click</label>
        </div>
        {/* third */}
        <div className={`${input_radio_hover_section}`}>
          <input
            type={`${input_type_radio}`}
            className={`${input_radio_hover}`}
          />
          <label className={`${input_radio_hover_label}`}>OK</label>
        </div>

        {/* fourth */}
        <div className={`${input_radio_toggle_section}`}>
          <label className={`${input_radio_toggle_label_yes}`}>
            <input type={`${input_type_radio}`} name={`${name}`} />
            yes
          </label>
          <label className={`${input_radio_toggle_label_no}`}>
            <input type={`${input_type_radio}`} name={`${name}`} />
            No
          </label>
        </div>
        <hr />
        <input type="month" className={`${input_month}`} />
      </div>
    </div>
  );
};
export default InputField;
