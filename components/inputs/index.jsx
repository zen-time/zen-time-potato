import React from "react";
import InputField from "./inputField";

const Index = ({
  label,
  type,
  style,
  placeholder,
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
    <div>
      <InputField
        // general
        type={type}
        placeholder={placeholder}
        // first input field
        input_fill={input_fill}
        // second input field
        style={style}
        label={label}
        // third input field
        input_shadow={input_shadow}
        // fourth input field
        input_hover={input_hover}
        // five'th input field
        input_borderBottom={input_borderBottom}
        // radio button
        input_type_radio={input_type_radio}
        input_radio={input_radio}
        input_shadow_section={input_shadow_section}
        input_radio_label={input_radio_label}
        // second radio field
        input_radio_container={input_radio_container}
        input_radio_normal={input_radio_normal}
        input_radio_normal_label={input_radio_normal_label}
        // third radio field
        input_radio_hover_section={input_radio_hover_section}
        input_radio_hover={input_radio_hover}
        input_radio_hover_label={input_radio_hover_label}
        // fourth radio field
        input_radio_toggle_section={input_radio_toggle_section}
        input_radio_toggle_label_yes={input_radio_toggle_label_yes}
        input_radio_toggle_label_no={input_radio_toggle_label_no}
        // month input field
        input_month={input_month}
        name={name}
      />
    </div>
  );
};

export default Index;
