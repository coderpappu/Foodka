import React from "react";
import bg_right from "../../assets/bg-up.png";
import bg_pic from "../../assets/1.png";

const HeroRight = () => {
  return (
    <div className="hero_right md:w-[40%] lg:w-2/4 hidden md:block lg:p-4 md:mt-52 lg:mt-48 xl:mt-[250px] 2xl:mt-[18rem]">
      <img
        src={bg_pic}
        alt="bg upper"
        className="w-[105%] xl:w-[115%] h-auto lg:w-[90%] lg:h-auto"
      />
    </div>
  );
};

export default HeroRight;
