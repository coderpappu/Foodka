import React, { useState } from "react";
import Ramen from "../../assets/filterFood/1.png";
import { twMerge } from "tailwind-merge";

const FilterBtn = ({ idFuncClick, buttonID, genId }) => {
  

  return (
    <div
      onClick={() => idFuncClick(genId)}
      className={twMerge(
        "h-[70px] w-[270px] sm:w-[135px] xl:h-[80px] xl:w-[200px] py-[8px] px-[16px]  bg-[#Faf7f2] rounded-[50px] flex flex-wrap justify-center text-center items-center cursor-pointer",
        buttonID == genId ? "bg-[#292929]" : "bg-[#Faf7f2]"
      )}
    >
      <div className="mr-2">
        <img src={Ramen} alt="ramen" />
      </div>
      <div
        className={twMerge(
          "text-[16px] xl:text-[18px] font-medium text-[#000] ",
          buttonID == genId ? "text-[#fff]" : "text-[#000] "
        )}
      >
        Ramen
      </div>
    </div>
  );
};

export default FilterBtn;
