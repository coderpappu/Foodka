import React from "react";

const HeroLeft = () => {
  return (
    <>
      <div className="hero_left w-full text-center sm:text-left md:w-[60%] lg:w-2/4 mt-40 sm:mt-44 lg:mt-44 xl:mt-42 2xl:mt-64  sm:px-0">
        <h2 className="font-[Satisfy]  text-2xl sm:text-[32px]  md:text-[33px] lg:text-[33px] text-[#dc2626] ">
          Japanese Test
        </h2>
        <h1 className="headingOne text-[33px] sm:text-[50px] md:text-[50px] lg:text-[50px] xl:text-[55px] px-2 sm:px-0 md:px-0 lg:pr-6 font-medium sm:font-semibold mt-1 sm:mt-2 leading-[43px] space sm:leading-[62px] xl:leading-[70px] p-0 text-[#292929] 2xl:tracking-wide">
          Different Spice For A Different Taste
        </h1>
        {/* <h1 className="hed text-[32px] md:text-[56px]  leading-0 px-2 md:px-0 font-semibold p-0 text-[#292929]  mb-4">
          
        </h1> */}

        <p className="text-base sm:text-xl md:text-lg lg:text-xl text-[#5f5f5f] mb-5 leading-8 sm:leading-9 md:leading-9 lg:leading-10  sm:px-0 mt-4">
          You need not only Just Food Stalls with Persons but also specialized
          equipment start the Fast Food
        </p>

        <button className="px-12 py-[14px] mt-3 rounded-full font-semibold text-lg bg-[#fdc913]">
          GET IT NOW
        </button>
      </div>
    </>
  );
};

export default HeroLeft;
