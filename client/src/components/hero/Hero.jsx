import React from 'react';

import HeroContent from './HeroContent';
import MoveBg from './MoveBg';

const Hero = () => {
  return (
    // hero wrapper 
    <section className='hero_wrapper'>
        {/* hero container  */}
        <div className='w-[100%] bg-[#FAF7F2] m-auto h-[100vh] relative w-full overflow-hidden'>
            <MoveBg/>
            <HeroContent/>
            
        </div>
    </section>
  )
}

export default Hero