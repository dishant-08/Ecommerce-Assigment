import React from "react";
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { Button } from "./Button";

const SocialLink = ({ href, icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {icon}
  </a>
);

const FooterLink = ({ title }) => <p className="text-xl">{title}</p>;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div id="footer" className="bg-footer_bg text-white">
      {/* Get started */}
      <section className="py-10">
        <div className="mx-auto flex flex-col md:flex-row text-center place-content-center gap-8">
          <div>
            <h3 className="text-4xl">Ready to get started?</h3>
            <h3 className="text-2xl">Let's talk today</h3>
          </div>
          <div className="self-center">
            <Button>Get Started</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="md:py-16 text-2xl">
        <div className="px-8 my-10 text-center place-content-center grid grid-cols-4 gap-10">
          <div className="col-span-4 md:col-span-1">
            <h3 className="text-2xl mb-4">E-store</h3>
            <p className="text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className="col-span-4 md:col-span-1">
            <h3 className="text-2xl mb-4">
              Subscribe to get important updates
            </h3>
            <form className="flex flex-col items-center  gap-2">
              <input
                type="email"
                placeholder="Type your email"
                className="border border-gray-400 text-black px-2 py-1"
                required
              />
              <div>
                <input
                  type="submit"
                  value="Subscribe"
                  className="bg-btn text-2xl px-4 py-1 text-white cursor-not-allowed"
                  disabled
                />
              </div>
            </form>
          </div>

          <div className="col-span-4 md:col-span-1">
            <h3 className="text-2xl mb-4">Follow</h3>
            <div className="flex justify-center gap-2">
              <SocialLink
                href="https://instagram.com/"
                icon={<FaInstagram className="text-white text-2xl" />}
              />
              <SocialLink
                href="https://youtube.com/"
                icon={<FaYoutube className="text-white text-2xl" />}
              />
              <SocialLink
                href="https://github.com/"
                icon={<FaGithub className="text-white text-2xl" />}
              />
            </div>
          </div>

          <div className="col-span-4 md:col-span-1">
            <h3 className="text-2xltext-xl mb-4">Call Us</h3>
            <a href="tel:+917978747037" className="text-white">
              +917978747037
            </a>
          </div>
        </div>

        {/* Bottom footer */}
        <div className=" ">
          <hr className="mb-2 border-t-2 border-gray-400" />
          <div className="flex justify-between px-10 items-center gap-8">
            <p className="text-xl">
              @{currentYear} E-Store all right reserved.
            </p>
            <div className="flex">
              <FooterLink title="Privacy policy" />
              <FooterLink title="Terms And Conditions" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
