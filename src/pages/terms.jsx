import React from "react";
import Navbar from "../components/navbar";

const Terms = (props) => {
  props.onBg("bg-white");

  return (
    <div className="mx-auto text-white min-h-screen">
      <Navbar isDark={false}/>
      <h2>قوانین</h2>
    </div>
  );
};

export default Terms;
