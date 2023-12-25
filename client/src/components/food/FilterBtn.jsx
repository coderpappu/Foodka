import React, { useState } from "react";
import Ramen from "../../assets/filterFood/1.png";
import { twMerge } from "tailwind-merge";

const FilterBtn = () => {
  let [clicked, setClick] = useState(false);

  let handleClick = () => {
    if (clicked == true) {
      setClick(false);
    } else {
      setClick(true);
    }
  };
  return (
    <div
      onClick={handleClick}
      className={twMerge(
        "h-[70px] w-[270px] sm:w-[135px] xl:h-[80px] xl:w-[200px] py-[8px] px-[16px]  bg-[#Faf7f2] rounded-[50px] flex flex-wrap justify-center text-center items-center cursor-pointer",
        clicked && "bg-[#292929] "
      )}
    >
      <div className="mr-2">
        <img src={Ramen} alt="ramen" />
      </div>
      <div
        className={twMerge(
          "text-[16px] xl:text-[18px] font-medium text-[#000] ",
          clicked && "text-[#fff]"
        )}
      >
        Ramen
      </div>
    </div>
  );
};

export default FilterBtn;
