import React from "react";

import HeroSection from "../components/HomeComp/HeroSection";
import Featured from "../components/HomeComp/Featured";
import Trusted from "../components/HomeComp/Trusted";
import Service from "../components/HomeComp/Services";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Featured />
      <Service />
      <Trusted />
    </div>
  );
};

export default Home;
