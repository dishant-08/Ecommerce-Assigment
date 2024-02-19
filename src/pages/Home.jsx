// src/pages/Home.js
import React from "react";
// import CategoryList from "../components/HomeComp/CategoryList";
import Header from "../components/HomeComp/Header";
import HeroSection from "../components/HomeComp/HeroSection";
import Featured from "../components/HomeComp/Featured";
import Trusted from "../components/HomeComp/Trusted";
import Service from "../components/HomeComp/Services";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className=" ">
      <HeroSection mydata={"dishant"} />
      <Featured />
      <Service />
      <Trusted />

      {/* <h1>Product Catalog</h1>
      <CategoryList /> */}
    </div>
  );
};

export default Home;
