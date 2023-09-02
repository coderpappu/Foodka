import React from "react";
import iconOne from "../../assets/about/1.png";
import iconeTwo from "../../assets/about/2.png";
import iconThree from "../../assets/about/3.png";
import iconFour from "../../assets/about/4.png";
import SingleAboutCard from "./SingleAboutCard";

const RightAbout = () => {
  return (
    <div className="w-[50%]">
      <h2 className="font-[Satisfy] text-3xl text-[#dc2626]">Why choose us</h2>
      <h1 className="text-[42px] font-semibold my-6">Why we are the best</h1>
      <p className="text-[#5f5f5f]">
        A, blandit euismod ullamcorper vestibulum enim habitasse. Ultrices
        tincidunt scelerisque elit enim. A neque malesuada in tortor eget justo
        mauris nec dolor. Consequat risus vitae, ac ac et preparation. He wanted
        to serve burgers, fries and beverages that tasted .
      </p>
      <div className="flex flex-wrap mt-8">
      <SingleAboutCard img={iconOne} title={"Fresh Food"}/>
      <SingleAboutCard img={iconeTwo} title={"Fast Delivery"}/>
      <SingleAboutCard img={iconThree} title={"Quality Maintain"}/>
      <SingleAboutCard img={iconFour} title={" 24/7 Service"}/>
      </div>
    </div>
  );
};

export default RightAbout;
