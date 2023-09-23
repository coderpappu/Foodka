import React from "react";
import LeftAbout from "./LeftAbout";
import RightAbout from "./RightAbout";

const About = () => {
  return (
    <div className="lg:w-[1300px]  w-full  m-auto px-[20px]">
      <div className="flex flex-wrap my-[100px] justify-center">
        <LeftAbout />
        <RightAbout />
      </div>
    </div>
  );
};

export default About;
