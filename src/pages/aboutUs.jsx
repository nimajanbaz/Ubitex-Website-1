import React from "react";
import Navbar from "../components/navbar";

const AboutUs = (props) => {
  props.onBg("bg-white");

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <Navbar isDark={false}/>
      <h2>درباره ما</h2>
    </div>
  );
};

export default AboutUs;
