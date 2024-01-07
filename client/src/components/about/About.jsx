import React from "react";
import LeftAbout from "./LeftAbout";
import RightAbout from "./RightAbout";

const About = () => {
  return (
    <div className="  w-full sm:w-[540px] md:w-[720px] lg:w-[960px] xl:w-[1140px] 2xl:w-[1320px]   m-auto px-[20px] sm:px-3 lg:px-0">
      <div className="flex flex-wrap my-[100px] justify-center">
        <LeftAbout />
        <RightAbout />
      </div>
    </div>
  );
};

export default About;
