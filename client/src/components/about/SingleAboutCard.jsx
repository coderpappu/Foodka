import React from "react";

const SingleAboutCard = ({ img, title }) => {
  return (
    <div className="w-[280px] sm:w-[230px] md:w-[320px] lg:w-[210px]  xl:w-[257px] 2xl:w-[300px] h-auto flex flex-wrap justify-around items-center bg-[#FAF7F2] px-14 sm:px-10 md:px-20 lg:px-7 2xl:px-14 py-5 sm:py-4 my-2 sm:mr-4">
      <div className="w-[30%] ">
        <img src={img} alt="Fresh Image" />
      </div>
      <div className="w-[70%] text-center ">
        <h2 className="font-semibold">{title}</h2>
      </div>
    </div>
  );
};

export default SingleAboutCard;
