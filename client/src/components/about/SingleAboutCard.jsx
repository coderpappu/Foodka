import React from "react";

const SingleAboutCard = ({ img, title }) => {
  return (
    <div className="w-[280px] sm:w-[240px] md:w-[290px] xl:w-72 h-auto flex flex-wrap justify-around items-center bg-[#FAF7F2] px-10 py-4 my-2 mr-4">
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
