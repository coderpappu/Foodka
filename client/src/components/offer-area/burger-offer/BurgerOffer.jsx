import React from "react";
import OfferImg from "../../../assets/offer/burger.png";

// w-[640px] sm:w-full lg:w-[480px] xl:w-[570px] 2xl:w-[660px]

const BurgerOffer = () => {
  return (
    <div className="w-500 sm:w-130 p-21 md:w-[720px] lg:w-[960px] xl:w-[1140px] 2xl:w-[1320px]  h-[410px]  m-auto  bg-[#fdc913] rounded-[12px] overflow-hidden">
      <div className="flex flex-wrap pt-[55px] ">
        {/* offer area text side  */}
        <div className="w-[500px] pl-[90px] ">
          <h1 className="text-[56px] font-normal font-[Satisfy] text-[#292929] mb-[-15px]">
            Double Cheese
          </h1>
          <h2 className="text-[100px] font-black text-[--color-red] leading-[120px]">
            BURGER
          </h2>
          <p className="text-[28px] leading-[33px]">
            With Free Cocacola. Stay home , we deliver
          </p>
        </div>

        {/* offer area offer img  */}
        <div className="w-[800px]  pl-9 overflow-hidden">
          <img src={OfferImg} className="w-[650px] h-[310px]" alt="Offer Img" />
        </div>
      </div>
    </div>
  );
};

export default BurgerOffer;
