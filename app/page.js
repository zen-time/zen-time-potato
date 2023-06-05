import React from "react";
import "@styles/globals.css";
import Index from "@components/inputs";

const Home = () => {
  return (
    <div>
      <Index
        // general
        type={"password "}
        placeholder={"Password"}
        name={"radio"}
        // first input field
        input_fill={"input_fill"}
        // second input field
        style={"input_outline "}
        label={"input_outline_label"}
        // third input field
        input_shadow={"input_shadow"}
        //fourth input field
        input_hover={"input_hover"}
        // five'th input field
        input_borderBottom={"input_borderBottom"}
        // first radio button
        input_type_radio={"radio"}
        input_radio={"input_radio"}
        input_shadow_section={"input_shadow_section"}
        input_radio_label={"input_radio_label"}
        // second radio button
        input_radio_container={"input_radio_container"}
        input_radio_normal={"input_radio_normal"}
        input_radio_normal_label={"input_radio_normal_label"}
        // third radio field
        input_radio_hover_section={"input_radio_hover_section"}
        input_radio_hover={"input_radio_hover"}
        input_radio_hover_label={"input_radio_hover_label"}
        // fourth
        input_radio_toggle_section={"input_radio_toggle_section"}
        input_radio_toggle_label_yes={"input_radio_toggle_label_yes"}
        input_radio_toggle_label_no={"input_radio_toggle_label_no"}
        // month input field
        input_month={"input_month"}
      />
    </div>
  );
};

export default Home;
