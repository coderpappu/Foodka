import React from 'react';
import bg_right from "../../assets/bg-up.png";

const Hero = () => {
  return (
    // hero wrapper 
    <section className='hero_wrapper'>
        {/* hero container  */}
        <div className='w-[100%] bg-[#FAF7F2] m-auto h-[100vh] relative w-full'>
            <div className='hero_bg w-full h-[100vh] absolute top-0 bg-cover bg-center  bg-[url("https://i.postimg.cc/YCb125dR/bg.png")]' >

            </div>
            <div className='lg:w-[1300px]  w-4/5  m-auto flex flex-wrap justify-between'>
            <div className='hero_left w-2/4 mt-36 '>
                <h2 className='font-[Satisfy] text-4xl text-[#dc2626]'>Japanese Test</h2>
                <h1 className='headingOne text-[56px] font-semibold mt-4 leading-[62px] p-0 text-[#292929] '>Different Spice For A</h1>
                <h1 className='hed text-[56px] leading-0 font-semibold p-0 text-[#292929]  mb-4'>
                Different Taste
                </h1>
                <p className='text-xl text-[#5f5f5f] mb-5 leading-9'>
                You need not only Just Food Stalls with Persons but also specialized equipment start the Fast Food
                </p>
                <button className='px-12 py-[14px] mt-3 rounded-full font-semibold text-lg bg-[#fdc913]'>GET IT NOW</button>
            </div>
            <div className='hero_right w-2/4'>
                <img src={bg_right} alt='bg upper'/>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Hero