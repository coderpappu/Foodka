import React from "react";
import cardImgOne from "../../../assets/offer/2.png";
import cardImgTwo from "../../../assets/offer/3.png";
import cardImgThree from "../../../assets/offer/4.png";
import OfferCard from "./OfferCard";

const SingleOffer = () => {
  return (
    <div className="w-full sm:w-smw md:w-mdw lg:w-lgw xl:w-xlw 2xl:w-xxlw px-6 sm:px-3 md:px-3 lg:px-0   m-auto  overflow-hidden mt-8">
      {/* full section wrapper  */}
      <div className="card-wrapper flex flex-wrap justify-between md:justify-around lg:justify-between ">
        <OfferCard
          image={cardImgOne}
          altText="This is a demo text"
          heading="Enjoy 30% CashBack"
          Test
          with
          paraText="Up to $70 on all Bkash"
        />
        <OfferCard
          image={cardImgTwo}
          altText="This is a demo text"
          heading="Enjoy 30% CashBack"
          paraText="Up to $70 on all Bkash"
        />
        <OfferCard
          image={cardImgThree}
          altText="This is a demo text"
          heading="JAPANESE FOOD AT HOME"
          paraText="Up to $70 on all Bkash"
        />
      </div>
    </div>
  );
};

export default SingleOffer;
