import React from 'react';

import HeroLeft from './HeroLeft';
import HeroRight from './HeroRight';

const HeroContent = () => {
  return (
    <div className='lg:w-[1300px]  w-4/5  m-auto flex flex-wrap justify-between'>
    <HeroLeft/>
    <HeroRight/>
    
    </div>
  )
}

export default HeroContent