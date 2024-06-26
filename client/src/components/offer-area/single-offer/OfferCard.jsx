import React from "react";
import cardImgOne from "../../../assets/offer/2.png";
import { twMerge } from "tailwind-merge";

const OfferCard = ({
  image,
  altText,
  heading,
  paraText,
  headingTxtStyle,
  paraTxtStyle,
}) => {
  return (
    <div className="w-[280px] h-[350px] sm:w-[516px] sm:h-[400px] md:w-[336px] md:h-[400px] lg:w-[296px] lg:h-[400px]  xl:w-[356px] xl:h-[430px] 2xl:w-[416px] 2xl:h-[430px] rounded-xl bg-brown-100 relative overflow-hidden mb-5">
      <img
        src={image}
        alt={altText}
        className="w-full h-[350px] sm:h-[400px] md:h-[400px] lg:h-[400px] xl:h-[430px] absolute top-0 z-0 transition ease-in duration-500 hover:scale-105 "
      />
      <div className="absolute z-20 w-full px-[40px] py-[30px]">
        <h2 className={twMerge("text-brown-50", headingTxtStyle)}>{heading}</h2>
        <h3 className={paraTxtStyle}>{paraText}</h3>
      </div>
    </div>
  );
};

export default OfferCard;
