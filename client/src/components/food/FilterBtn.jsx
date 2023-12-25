import React from "react";
import Ramen from "../../assets/filterFood/1.png";

const FilterBtn = () => {
  // color change todo
  // hover and click bg : bg-[#292929]
  // normal bg : #FAF7F2

  return (
    <div className="h-[70px] w-[270px] sm:w-[135px] xl:h-[80px] xl:w-[200px] py-[8px] px-[16px]  bg-[#Faf7f2] rounded-[50px] flex flex-wrap justify-center text-center items-center">
      <div className="mr-2">
        <img src={Ramen} alt="ramen" />
      </div>
      <div className="text-[16px] xl:text-[18px] font-medium text-[#fff] ">
        Ramen
      </div>
    </div>
  );
};

export default FilterBtn;
