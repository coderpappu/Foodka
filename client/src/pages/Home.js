import React from 'react';

import About from '../components/about/About';
import Hero from '../components/hero/Hero';
import Intro from '../components/intro/Intro';
import Menu from "../components/menu/Menu";
const Home = () => {
  return (
    <>
    <Menu/>
    <Hero/>
    <Intro/>
    <About/>
    </>
  )
}

export default Home