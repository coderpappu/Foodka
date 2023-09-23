import React from "react";

import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const HeroContent = () => {
  return (
    <div className="lg:w-full 2xl:w-full sm:w-full md:w-full  m-auto ">
      {/* custom container section  */}
      <div className="w-full sm:w-[540px] md:w-[720px] lg:w-[960px] xl:w-[1140px] 2xl:w-[1320px]  m-auto px-3 md:px-3 xl:px-3 flex flex-wrap justify-between">
        <HeroLeft />
        <HeroRight />
      </div>
    </div>
  );
};

export default HeroContent;
