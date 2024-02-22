import React, { useEffect } from "react";
import Hero from "../../assets/shopinng.svg";
import cartImg from "../../assets/cart.webp";
import bucket from "../../assets/bucket.svg";
import AnimatedTextCharacter from "../AnimatedText";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const HeroImage = () => {
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
    <section className="bg-bgimage dark:text-gray-100">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={Hero}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div className="flex flex-col gap-2 justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold  sm:text-6xl">
            Curated
            <span className=" flex justify-center lg:justify-normal items-center my-1 dark:text-violet-400">
              {" "}
              <AnimatedTextCharacter text=" Collections " />{" "}
            </span>
            For the Modern You
          </h1>
          {/* <p className="mt-6 mb-8 text-lg sm:mb-12">
            Dictum aliquam porta in condimentum ac integer
            <br className="hidden md:inline lg:hidden" />
            turpis pulvinar, est scelerisque ligula sem
          </p> */}
          {/* <h1 class="mb-4  text-5xl md:text-6xl lg:text-7xl flex flex-col md:items-center md:justify-center font-extrabold leading-none  text-gray-900 ">
            <div className="flex flex-col md:flex-row md:gap-4  text-5xl  md:text-5xl lg:text-6xl ">
              <div>Curated </div>
             
              <div>
                <AnimatedTextCharacter text=" Collections " />
              </div>
            </div>
            For the Modern You
          </h1> */}
          <div className="flex flex-col m-4 space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="#category"
              className="px-8 py-3 text-lg font-semibold border border-gray-900 rounded dark:border-gray-100"
            >
              Explore Categories{" "}
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div>
          <img
            className=" hidden lg:block w-[20rem] md:w-[30rem]  h-[20rem] absolute right-0 bottom-0  cart-image "
            src={bucket}
            alt="Cart"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroImage;
