import React from "react";
import Index from "@components/inputs";
// import "@styles/globals.css";

const Home = () => {
  return (
    <>
      {/* text success */}

      <Index
        style={"input_pro_success"}
        type={"text"}
        placeholder={"Enter your name"}
      />

      {/*text warning */}

      <Index
        style={"input_pro_warning"}
        type={"text"}
        placeholder={"Enter your name"}
      />

      {/* date success */}

      <Index
        style={"input_pro_success"}
        type={"date"}
        placeholder={"Enter your name"}
      />

      {/* date warning */}

      <Index
        style={"input_pro_warning"}
        type={"date"}
        placeholder={"Enter your name"}
      />
    </>
  );
};

export default Home;
