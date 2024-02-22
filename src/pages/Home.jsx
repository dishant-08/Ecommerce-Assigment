import React from "react";

import HeroSection from "../components/HomeComp/HeroSection";
import Featured from "../components/HomeComp/Featured";
import Trusted from "../components/HomeComp/Trusted";
import Service from "../components/HomeComp/Services";
import HeroImage from "../components/HomeComp/HeroImage";

const Home = () => {
  return (
    <div>
      {/* <HeroSection /> */}
      <HeroImage />
      <Featured />
      <Service />
      <Trusted />
    </div>
  );
};

export default Home;
