import React, { useEffect } from "react";
import Family from "../../assets/family_imageshopping.jpg";
// import { NavLink } from "react-router-dom";
// import { Button } from "../styles/Button";
import bgImage from "../../assets/bgimage.jpg";
import cartImg from "../../assets/cart.webp";
import { TypewriterEffect, TypewriterEffectSmooth } from "../TypeWriter";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedTextCharacter from "../AnimatedText";

const HeroSection = ({ mydata }) => {
  // const { name } = mydata;

  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Your GSAP animation code with scrollTrigger
    gsap.to(".cart-image", {
      x: "-50%",
      scrollTrigger: {
        trigger: ".cart-image",
        start: "right center", // Change start to 'right center'
        end: "left center", // Change end to 'left center'
        scrub: 0.8,
      },
    });
  }, []);

  return (
    <div className=" relative h-screen ">
      <img
        className=" absolute -z-40 top-0 left-0 w-full h-full object-cover "
        src={bgImage}
        alt="Background Image"
      />
      <p className=" text-black flex justify-end items-start p-[10%] h-screen  ">
        <AnimatedTextCharacter text="Welcome! to Ecommerce Project" />
      </p>

      <div>
        <img
          className=" w-[20rem] md:w-[30rem]  h-[20rem] md:h-[30rem] absolute right-0 bottom-20  cart-image "
          src={cartImg}
          alt="Cart"
        />
      </div>
    </div>
    // <section className="pt-16 px-10 md:px-0 mt-8"> Curated Collections for the Modern You.
    //   <div className="container mx-auto">
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    //       <div className="hero-section-data font-semibold text-3xl ">
    //         <p className="intro-data text-btn ">Welcome to </p>
    //         <h2 className="text-2xl md:text-4xl font-bold font-cursive capitalize">
    //           {name}
    //         </h2>
    //         <p className="mt-4">
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
    //           atque temporibus veniam doloribus libero ad error omnis voluptates
    //           animi! Suscipit sapiente.
    //         </p>
    //         {/* <NavLink to="/products">
    //           <Button>Show Now</Button>
    //         </NavLink> */}
    //       </div>
    //       <div className="hero-section-image flex justify-center items-center">
    //         <figure className="relative">
    //           <img
    //             src={Family}
    //             alt="hero-section"
    //             className="w-full rounded-xl h-auto"
    //           />
    //           <div className=" hidden md:block absolute w-3/5 h-4/5 bg-btn right-[-45%] top-[-3.5rem] transform -z-10 rounded-md -translate-x-1/2 "></div>
    //         </figure>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default HeroSection;
