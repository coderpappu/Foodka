import React from "react";

const IntroCard = ({ img, headline, title }) => {
  return (
    <div className="w-[423px] md:w-[350px] lg:w-[320px] xl:lg:w-[423px] h-auto rounded-[10px] bg-[#fff] transition duration-500 ease-in-out hover:bg-[#fdc913] text-center p-5 mx-[5px] my-3 flex items-center justify-center flex-col">
      <div className="w-[100px] h-[100px] ">
        <img src={img} className="w-full h-auto" alt="Calender" />
      </div>
      <h2 className="font-semibold text-lg lg:text-xl xl:text-2xl mt-[-10px]">
        {headline}
      </h2>
      <p className="mt-3 mb-2 text-[#5f5f5f]">{title}</p>
    </div>
  );
};

export default IntroCard;
