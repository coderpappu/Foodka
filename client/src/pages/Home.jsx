import React from "react";

import About from "../components/about/About.jsx";
import Hero from "../components/hero/Hero.jsx";
import Intro from "../components/intro/Intro.jsx";
import Menu from "../components/menu/Menu.jsx";
import OfferArea from "../components/offer-area/OfferArea.jsx";
import SignatureFood from "../components/food/SignatureFood.jsx";
import ExcellentFood from "../components/excellentFood/ExcellentFood.jsx";
const Home = () => {
  return (
    <>
      <Menu />
      <Hero />
      <Intro />
      <About />
      <OfferArea />
      <SignatureFood />
      <ExcellentFood />

      <div className="h-[200px]"></div>
    </>
  );
};

export default Home;
