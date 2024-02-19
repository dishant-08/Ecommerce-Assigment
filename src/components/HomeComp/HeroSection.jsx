import React from "react";
import Family from "../../assets/family_imageshopping.jpg";
// import { NavLink } from "react-router-dom";
// import { Button } from "../styles/Button";

const HeroSection = ({ mydata }) => {
  const { name } = mydata;

  return (
    <section className="pt-16 px-10 md:px-0 mt-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="hero-section-data font-semibold text-3xl ">
            <p className="intro-data text-btn ">Welcome to </p>
            <h2 className="text-2xl md:text-4xl font-bold font-cursive capitalize">
              {name}
            </h2>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              atque temporibus veniam doloribus libero ad error omnis voluptates
              animi! Suscipit sapiente.
            </p>
            {/* <NavLink to="/products">
              <Button>Show Now</Button>
            </NavLink> */}
          </div>
          <div className="hero-section-image flex justify-center items-center">
            <figure className="relative">
              <img
                src={Family}
                alt="hero-section"
                className="w-full rounded-xl h-auto"
              />
              <div className=" hidden md:block absolute w-3/5 h-4/5 bg-btn right-[-45%] top-[-3.5rem] transform -z-10 rounded-md -translate-x-1/2 "></div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
