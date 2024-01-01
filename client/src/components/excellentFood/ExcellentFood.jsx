import React from "react";
import ChooseFood from "../../assets/chooseFood.png";
const ExcellentFood = () => {
  return (
    <div className="w-full h-[765px] bg-no-repeat bg-cover bg-center  mt-20 pt-[100px] bg-[url('https://res.cloudinary.com/dpfpz6upr/image/upload/v1704115474/exbg_f6gujs.png')] ">
      <div className="responsive-wrapper  flex flex-wrap overflow-visible">
        <div className="w-[50%]">
          <h2 className="text-[32px] text-[#ce2829] font-[Satisfy]">
            Why Choose Us
          </h2>
          <h1 className="text-[42px] font-semibold text-[#292929] leading-[56px] my-4">
            We Have Excellent Of Quality Japanese Food
          </h1>
          <p className="mt-[20px] text-[16px] leading-[29px] text-[#5f5f5f]">
            A, blandit euismod ullamcorper vestibulum enim habitasse. Ultrices
            tincidunt scelerisque elit enim. A neque malesuada in tortor eget
            justo mauris nec dolor. Consequat risus vitae, ac ac et preparation.
            He wanted to serve burgers, fries and beverages that tasted .
          </p>
          <button className="mt-[40px] text-[18px] font-semibold leading-[64px] text-[#292929] bg-[#fdc913] w-[243px] h-[64px] rounded-[50px] ">
            CHECK OUR MENU
          </button>
        </div>
        <div className="w-[50%]">
          <div className=" w-[833px] h-[633px] mx-[-100px] my-[-39px]">
            <img src={ChooseFood} alt="choose food" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExcellentFood;
