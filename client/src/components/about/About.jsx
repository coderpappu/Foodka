import React from 'react'
import LeftAbout from './LeftAbout'
import RightAbout from './RightAbout'

const About = () => {
  return (
    <div className='lg:w-[1300px]  w-4/5  m-auto'>
        <div className='flex flex-wrap my-[100px]'>
        <LeftAbout/>
        <RightAbout/>
        </div>
    </div>
  )
}

export default About