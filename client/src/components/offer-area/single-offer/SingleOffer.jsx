import React from "react";
import cardImgOne from "../../../assets/offer/2.png";
import cardImgTwo from "../../../assets/offer/3.png";
import cardImgThree from "../../../assets/offer/4.png";

const SingleOffer = () => {
  return (
    <div className="lg:w-[1300px]  w-4/5   m-auto  overflow-hidden mt-7">
      <div className="offer-cards flex flex-wrap w-[100%]">

        {/* 1st card  */}

        <div className="single-offer-card md:w-[32%] w-[100%] h-[430px] bg-[#000] px-10 py-[30px] rounded-xl relative overflow-hidden ">
          <div className="absolute left-0 top-0">
            <img
              src={cardImgOne}
              className="transition ease-linear duration-200s hover:scale-105"
              alt="card image"
            />
          </div>
          <div className="absolute top-11">
            <h1 className="text-[37px] font-bold leading-[44px] mb-[5px] text-[#fdc913]">
              Enjoy 30% CashBack
            </h1>
            <h1 className="text-[24px] text-[#fff]">Up to $70 on all Bikash</h1>
          </div>
          {/* <img src={cardImgOne} alt="" /> */}
        </div>
        
        {/* 2nd card  */}
        <div className="single-offer-card md:w-[32%] w-[100%] h-[430px] bg-[#F8F7F2] px-10 py-[30px] rounded-xl relative overflow-hidden mx-5 top-0 left-0 ">
          <div className="absolute left-0 top-0">
            <img
              src={cardImgTwo}
              className="transition ease-linear duration-200s hover:scale-105  w-full cardig"
              alt="card image"
            />
          </div>
          <div className="absolute top-11 text-center w-[80%]">
            <h1 className="text-[37px] font-bold leading-[44px] mb-[5px] text-[--color-red]">
                25 EXTRA
            </h1>
            <h1 className="text-[42px] text-[#000] font-bold mt-[-15px]">FREE ON KFC</h1>
            <p className="text-[#292929]">Stay home , we deliver</p>
          </div>
          {/* <img src={cardImgOne} alt="" /> */}
        </div>

        {/* 3rd card  */}
        <div className="single-offer-card md:w-[32%] w-[100%] h-[430px] px-10 py-[30px] rounded-xl relative overflow-hidden ">
          <div className="absolute left-0 top-0">
            <img
              src={cardImgThree}
              className="transition ease-linear duration-200s hover:scale-105"
              alt="card image"
            />
          </div>
          <div className="absolute top-11">
            <h2 className="text-[24px] text-[#fdc913] font-normal font-['Satisfy']">Test with</h2>
            <h1 className="text-[37px] font-bold leading-[44px] mb-[5px] text-[#ffffff]">
            JAPANESE
            </h1>
            <h1 className="text-[37px] leading-5 font-bold text-[#fff]">FOOD AT HOME</h1>
          </div>
          {/* <img src={cardImgOne} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default SingleOffer;
