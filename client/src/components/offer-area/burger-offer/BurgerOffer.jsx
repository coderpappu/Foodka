import React from "react";
import OfferImg from "../../../assets/offer/burger.png";

const BurgerOffer = () => {
  return (
    // width control div
    <div className="w-full sm:w-smw md:w-mdw lg:w-lgw xl:w-xlw 2xl:w-xxlw px-6 sm:px-3 md:px-3 lg:px-0   m-auto  overflow-hidden ">
      {/* full section wrapper  */}
      <div className="flex flex-wrap pt-[100px] sm:pt-3 md:pt-9 lg:pt-[55px]  rounded-[12px] h-[305px] sm:h-[210px] md:h-[270px] lg:h-[410px] bg-[#fdc913] relative">
        {/* offer area text side  */}
        <div className="w-full sm:w-[290px] md:w-[335px] lg:w-[500px] px-[15px] sm:pl-[25px] md:pl-[35px] lg:pl-[90px] ">
          <h1 className="text-[40px] md:text-[40px] lg:text-[56px] font-normal font-[Satisfy] text-[#292929] mb-[-15px]">
            Double Cheese
          </h1>
          <h2 className="text-[60px] md:text-[70px] lg:text-[100px] font-black text-[--color-red] leading-[80px] md:leading-[90px] lg:leading-[120px]">
            BURGER
          </h2>
          <p className="text-[20px] md:text-[28px] lg:text-[28px] sm:leading-[25px] leading-[33px] md:leading-[33px]">
            With Free Cocacola. Stay home , we deliver
          </p>
        </div>

        {/* offer area offer img  */}
        <div className=" lg:w-[800px] pl-9 absolute top-8 sm:top-12 md:top-12 right-24 sm:right-6 md:right-8 lg:right-0 overflow-hidden">
          <img
            src={OfferImg}
            className="w-[120px] h-[60px] sm:w-[220px] sm:h-[120px] md:w-[340px] md:h-[180px] lg:w-[650px] lg:h-[310px]"
            alt="Offer Img"
          />
        </div>
      </div>
    </div>
  );
};

export default BurgerOffer;
