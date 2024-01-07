import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaBasketShopping, FaPhoneVolume } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import LogoImg from "../../assets/logo.png";
import MenuItem from "./MenuItem";

const Menu = () => {
  let [scrollPosi, setScrollPosi] = useState(0);
  let [isSticky, setIsSticky] = useState(false);

  window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY;
    setIsSticky(scrollPosition > 0);
  });

  return (
    // menu section
    <section
      className={
        isSticky
          ? "menu sticky top-0 z-50 w-full lg:h-[100px] bg-zinc-50   shadow-[2px 4px 6px 0px rgba(12, 0, 46, 0.05)] ease-in duration-500 "
          : "ease-in duration-300"
      }
    >
      {/* w-full sm:w-[540px] md:w-[720px] lg:w-[960px] xl:w-[1140px] 2xl:w-[1320px]  m-auto px-3 md:px-3 xl:px-3 flex flex-wrap justify-between */}

      <div className="z-50 top-0 absolute w-full  md:w-full lg:w-full xl:w-full ease-in duration-300 lg:h-[100px] px-3 sm:p-0">
        <div className=" sm:w-[540px] md:w-[720px] lg:w-[960px] xl:w-[1140px] 2xl:w-[1320px] lg:h-[80px] md:h-[100px] h-[80px] m-auto flex flex-wrap items-center px-[7px] md:px-[3px]">
          {/* navbar logo section  */}
          <div className="lg:w-[20%] w-[52%] sm:w-[62%] md:w-[54%] ">
            <img
              src={LogoImg}
              alt="foodka logo"
              className="w-[110px] md:w-[140px]"
            />
          </div>
          {/* menu section  */}
          <div className="w-[53%] lg:block hidden">
            <MenuItem />
          </div>
          {/* search section in mobile  */}
          <div className="md:w-[5%] w-[8%] lg:hidden">
            <IoSearchOutline className="text-[18px]" />
          </div>
          {/* cart section  */}
          <div className="lg:w-[12%] w-[30%] md:w-[15%] sm:w-[20%] flex flex-wrap items-center justify-around px-0 sm:px-3  truncate relative lg:h-[100px] h-[80px]">
            {/* icon  */}
            <FaBasketShopping className="lg:text-3xl text-xl" />
            {/* notify section  */}
            <div className="lg:w-6 lg:h-6 w-5 h-5 text-center bg-[#fdc913] rounded-full absolute lg:left-11 left-6 lg:top-7 top-5 text-[13px]">
              1
            </div>
            {/* price  */}
            <p className="font-medium left-4">49.50$</p>
          </div>

          {/* contact section  */}
          <div className=" lg:w-[15%] md:w-[20%] hidden md:flex flex-wrap items-center justify-around ">
            <FaPhoneVolume className="lg:text-2xl lg:text-lg text-sm" />
            {/* telephone icon  */}
            <p className="lg:font-medium font-light">+997509153849</p>
          </div>

          <div className="w-[10%] md:w-[6%] lg:hidden pl-3 text-center h-auto">
            <AiOutlineMenu className="text-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
