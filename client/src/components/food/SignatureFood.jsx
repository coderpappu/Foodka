import React from "react";
import SignatureHeader from "./SignatureHeader";
import FoodFilter from "./FoodFilter";
import Card from "./Card";
import FoodCards from "./FoodCards";

const SignatureFood = () => {
  return (
    <>
      <div className="responsive-wrapper mt-20">
        {/* heading section  */}
        <SignatureHeader />
        {/* Filter Section  */}
        <FoodFilter />
        {/* Foods Show section  */}
        <FoodCards />
      </div>
    </>
  );
};

export default SignatureFood;
