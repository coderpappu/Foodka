import React from "react";
import SignatureHeader from "./SignatureHeader";
import FoodFilter from "./FoodFilter";

const SignatureFood = () => {
  return (
    <>
      <div className="responsive-wrapper mt-20">
        {/* heading section  */}
        <SignatureHeader />
        {/* Filter Section  */}
        <FoodFilter />
        {/* Foods Show section  */}
      </div>
    </>
  );
};

export default SignatureFood;
