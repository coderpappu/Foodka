import React from "react";
import AboutImg from "../../assets/about/about.png";
const LeftAbout = () => {
  return (
    <div className="w-[640px] sm:w-full ">
      <img src={AboutImg} className="w-[500px] m-auto" alt="About Img" />
    </div>
  );
};

export default LeftAbout;
