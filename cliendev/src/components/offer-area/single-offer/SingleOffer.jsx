import React from "react";
import cardImgOne from "../../../assets/offer/2.png";
import cardImgTwo from "../../../assets/offer/3.png";
import cardImgThree from "../../../assets/offer/4.png";
import OfferCard from "./OfferCard";

const SingleOffer = () => {
  return (
    <div className="responsive-wrapper mt-8">
      {/* full section wrapper  */}
      <div className="card-wrapper flex flex-wrap justify-between md:justify-around lg:justify-between ">
        <OfferCard
          image={cardImgOne}
          altText="This is a demo text"
          heading="Enjoy 30% CashBack"
          paraText="Up to $70 on all Bkash"
          headingTxtStyle={
            "text-[36px] leading-[44px] mb-3 font-bold  text-[#fdc913]"
          }
          paraTxtStyle={
            "text-[#fff] text-[20px] sm:text-[24px] lg:text-[22px] md:text-[24px]"
          }
        />
        <OfferCard
          image={cardImgTwo}
          altText="This is a demo text"
          heading="25 EXTRA FREE"
          paraText="Up to $70 on all Bkash"
          paraTxtStyle={
            "text-[#919191] text-[20px] sm:text-[24px] lg:text-[22px] md:text-[24px] text-center"
          }
          headingTxtStyle={
            "text-[36px] leading-[44px] mb-3 font-extrabold text-center  text-[#030a3b]"
          }
        />
        <OfferCard
          image={cardImgThree}
          altText="This is a demo text"
          heading="JAPANESE FOOD "
          paraText="Up to $70 on all Bkash"
          paraTxtStyle={
            "text-[#fff] text-[20px] sm:text-[24px] lg:text-[22px] md:text-[24px]"
          }
          headingTxtStyle={
            "text-[36px] leading-[44px] mb-3 font-bold  text-[#fdc913]"
          }
        />
      </div>
    </div>
  );
};

export default SingleOffer;
