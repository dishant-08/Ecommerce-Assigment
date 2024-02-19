import React from "react";
// import { Button } from "../styles/Button";
// import { NavLink } from "react-router-dom";
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { Button } from "./Button";

const Footer = () => {
  return (
    <div className="bg-footer_bg text-white   ">
      {/* Get started */}
      <section className="py-10">
        <div className="mx-auto flex flex-col md:flex-row  text-center place-content-center gap-8">
          <div>
            <h3 className="text-4xl">Ready to get started?</h3>
            <h3 className="text-2xl">Let's talk today</h3>
          </div>
          <div className="self-center">
            {/* <NavLink to="/contact">
            </NavLink> */}
            <Button className="">Get Started</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="md:py-16 text-2xl ">
        <div className=" px-8 my-10 text-center place-content-center grid grid-cols-4 gap-10">
          <div className="col-span-4 md:col-span-1">
            <h3 className="text-xl mb-4">E-store</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="col-span-4 md:col-span-1">
            <h3 className="text-xl mb-4">Subscribe to get important updates</h3>
            <form className="flex flex-col items-center  gap-2">
              <input
                type="email"
                placeholder="type your email"
                className="border border-gray-400 text-black px-2 py-1"
                required
              />
              <div>
                <input
                  type="submit"
                  value="Subscribe"
                  className="bg-btn  px-4 py-1 text-white cursor-not-allowed"
                />
              </div>
            </form>
          </div>
          <div className="col-span-4 md:col-span-1">
            <h3 className="text-xl mb-4">Follow</h3>

            <div className="flex justify-center gap-2">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-white text-2xl" />
              </a>
              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="text-white text-2xl" />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-white text-2xl" />
              </a>
            </div>
          </div>
          <div className="col-span-4 md:col-span-1">
            <h3 className="text-xl mb-4">Call Us</h3>
            <a href="tel:+917978747037" className="text-white">
              +917978747037
            </a>
          </div>
        </div>

        {/* Bottom footer */}
        <div className=" ">
          <hr className="mb-2 border-t-2 border-gray-400" />
          <div className=" flex justify-around items-center  gap-8">
            <p className=" text-xl">
              @{new Date().getFullYear()} E-Store all right reserved.
            </p>
            <div className="flex">
              <p className="text-xl mr-4">Privacy policy</p>
              <p className="text-xl">Terms And Conditions</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
