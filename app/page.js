import Login from "@components/authentication";
import React from "react";

const Home = () => {
  return (
    <div>
      <Login
        Signin="Sign In Account"
        email="Email Address"
        Password="Password"
      />
    </div>
  );
};

export default Home;
