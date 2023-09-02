import React from 'react';
import Calender from "../../assets/intro/calendar.png";
import Map from "../../assets/intro/map-marker.png";
import Phone from "../../assets/intro/phone-2.png";
import IntroCard from "./IntroCard";

const Intro = () => {
  return (
   <>
    <section className='intro_contact_area md:h-[300px] h-[800px] pt-6 bg-[#FAF7F2]'>
        <div className='lg:w-[1300px]  w-4/5  m-auto flex flex-wrap '>
            <IntroCard img={Calender} headline={"Mon-fri : 10AM -9:30PM"} title={"Working Hours"}/>
            <IntroCard img={Map} headline={"Trails End Road Ft United States"} title={"Store Location"}/>
            <IntroCard img={Phone} headline={"+997 509 153 849"} title={"Working Hours"}/>
            
        </div>
    </section>
   </>
  )
}

export default Intro