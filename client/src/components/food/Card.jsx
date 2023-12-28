import React from "react";
import FoodImg from "../../assets/FoodCardImg/01.png";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { red } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Card = () => {
  return (
    <>
      <div className="w-[306px] h-[389px] px-[29px] pt-[25px] pb-[30px] mb-8 rounded-[16px] bg-[#FaF7F2] box-border">
        {/* food image section  */}
        <div className="cardImg text-center relative">
          <FavoriteIcon className="absolute right-0 text-[#CFC9B4] transition-[7s] hover:text-[red]" />
          <img src={FoodImg} alt="Food Img" className="w-[248px] h-[202px]" />
        </div>
        {/* Card Contents Details */}
        <div className="text-center mb-6">
          <h1 className="text-[22px] font-semibold text-[#292929] ">
            Double Burger
          </h1>

          {/* rating  */}
          <div className="w-[183px] m-auto flex flex-wrap justify-between items-center">
            <label className="text-[16px] font-semibold text-[#575757]">
              4.9
            </label>{" "}
            <label>
              {" "}
              <StarIcon sx={{ color: red[900], fontSize: "18px" }} />
              <StarIcon sx={{ color: red[900], fontSize: "18px" }} />
              <StarIcon sx={{ color: red[900], fontSize: "18px" }} />
              <StarIcon sx={{ color: red[900], fontSize: "18px" }} />
              <StarHalfIcon sx={{ color: red[900], fontSize: "18px" }} />
            </label>{" "}
            <label className="text-[16px] font-semibold text-[#575757]">
              (200)
            </label>
          </div>
        </div>

        {/* action and price  */}
        <div className="flex flex-wrap justify-between items-center mt-[18px]">
          <h1 className="text-[20px] font-bold text-[#292929]">$11.00</h1>

          <button className="text-[16px] font-semibold text-[#292929] w-[140px] h-[42px] px-[20px] bg-[#fbeec6] transition-all hover:bg-[#ffce3c] rounded-[8px] flex flex-wrap justify-between items-center">
            Add to cart <AddIcon sx={{ fontSize: "18px" }} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
