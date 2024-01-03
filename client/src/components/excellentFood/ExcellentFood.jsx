import React from "react";
import ChooseFood from "../../assets/chooseFood.png";
const ExcellentFood = () => {
  return (
    <div className="w-full h-[869px] sm:h-[980px] md:h-[1116px] lg:h-[730px] bg-no-repeat bg-cover bg-center  mt-20 pt-[100px] bg-[url('https://res.cloudinary.com/dpfpz6upr/image/upload/v1704115474/exbg_f6gujs.png')] bg-[#FAF7F2] ">
      <div className="responsive-wrapper  flex flex-wrap flex-col-reverse lg:flex-row overflow-visible">
        <div className="w-full text-center lg:text-left lg:w-[50%]">
          <h2 className="text-[25px] text-center lg:text-left lg:text-[32px] text-[#ce2829] font-[Satisfy]">
            Why Choose Us
          </h2>
          <h1 className="text-[26px] sm:text-[38px] leading-[35px] sm:leading-[47px] md:w-[70%] lg:w-full md:m-auto text-center lg:text-left lg:text-[42px] font-semibold text-[#292929] lg:leading-[56px] my-4">
            We Have Excellent Of Quality Japanese Food
          </h1>
          <p className="mt-[20px] md:mt-[20px] lg:mt-[20px] sm:w-[510px] md:w-[576px] lg:w-full sm:m-auto text-[15px] lg:text-[16px] text-center lg:text-left leading-[29px] text-[#5f5f5f]">
            A, blandit euismod ullamcorper vestibulum enim habitasse. Ultrices
            tincidunt scelerisque elit enim. A neque malesuada in tortor eget
            justo mauris nec dolor. Consequat risus vitae, ac ac et preparation.
            He wanted to serve burgers, fries and beverages that tasted .
          </p>
          <button className=" mt-[40px]  text-[18px] font-semibold md:leading-[64px] text-[#292929] bg-[#fdc913] w-[243px] h-[55px] sm:h-[60px] md:h-[64px]  rounded-[50px] ">
            CHECK OUR MENU
          </button>
        </div>
        <div className="w-full lg:w-[50%]">
          <div className="w-[280px] h-[212px]  sm:w-[516px] sm:h-[390px] md:w-[696px] md:h-[572px] lg:w-[639px] lg:h-[484px] xl:w-[833px] xl:h-[633px] lg:mx-[-100px] lg:my-[-39px]">
            <img src={ChooseFood} alt="choose food" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExcellentFood;
