import React from "react";
import Calender from "../../assets/intro/calendar.png";
import Map from "../../assets/intro/map-marker.png";
import Phone from "../../assets/intro/phone-2.png";
import IntroCard from "./IntroCard";

const Intro = () => {
  return (
    <>
      {/* w-full sm:w-[540px] md:w-[720px] lg:w-[960px] xl:w-[1140px] 2xl:w-[1320px] */}
      <section className="intro_contact_area h-auto pt-6 pb-[85px]  bg-[#FAF7F2]">
        <div className="w-full lg:w-full xl:w-[1140px] 2xl:w-[1320px]  px-3  m-auto flex flex-wrap justify-around">
          <IntroCard
            img={Calender}
            headline={"Mon-fri : 10AM -9:30PM"}
            title={"Working Hours"}
          />
          <IntroCard
            img={Map}
            headline={"Trails End Road Ft United States"}
            title={"Store Location"}
          />
          <IntroCard
            img={Phone}
            headline={"+997 509 153 849"}
            title={"Working Hours"}
          />
        </div>
      </section>
    </>
  );
};

export default Intro;
