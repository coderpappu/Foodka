import React from "react";
import BurgerOffer from "./burger-offer/BurgerOffer";
import SingleOffer from "./single-offer/SingleOffer";

const OfferArea = () => {
  return (
    <>
      <BurgerOffer />
      {/* <SingleOffer /> */}

      <div className="h-[200px]"></div>
    </>
  );
};

export default OfferArea;
