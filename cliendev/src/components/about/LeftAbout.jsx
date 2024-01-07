import React from "react";
import AboutImg from "../../assets/about/about.png";
const LeftAbout = () => {
  return (
    <div className="w-[640px] sm:w-full lg:w-[480px] xl:w-[570px] 2xl:w-[660px] lg:px-3">
      <img
        src={AboutImg}
        className="w-full sm:w-[500px] md:w-[456px] lg:w-full m-auto"
        alt="About Img"
      />
    </div>
  );
};

export default LeftAbout;
