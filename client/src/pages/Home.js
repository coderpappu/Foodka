import React from "react";

import About from "../components/about/About";
import Hero from "../components/hero/Hero";
import Intro from "../components/intro/Intro";
import Menu from "../components/menu/Menu";
import OfferArea from "../components/offer-area/OfferArea";
import SignatureFood from "../components/food/SignatureFood";
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
