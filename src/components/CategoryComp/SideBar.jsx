import React, { useState } from "react";
import Star from "./Star";
import { categories } from "../../data";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export const AccordionItem = ({ title, content, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    // setIsOpen(!isOpen);
    setIsOpen(!isOpen);
    console.log("Is Open:", isOpen);
  };

  return (
    <div className="relative mb-3" key={index}>
      <h6 className="mb-0">
        <button
          className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
          onClick={toggleAccordion}
        >
          <span>{title}</span>
          <FontAwesomeIcon
            icon={isOpen ? faChevronUp : faChevronDown}
            className="ml-auto"
          />
        </button>
      </h6>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        }  overflow-hidden transition-all duration-300 ease-in-out`}
      >
        {content}
      </div>
    </div>
  );
};

const SideBar = () => {
  return (
    <div>
      <AccordionItem
        title="Top Rated"
        content={
          <div className="flex flex-col justify-center items-center">
            {[5, 4, 3, 2, 1].map((item, index) => (
              <span key={index}> {Star(item)} & Up </span>
            ))}
          </div>
        }
        index={1}
      />
      <AccordionItem
        title="How to use Material Tailwind?"
        content={
          <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
            We're not always in the position that we want to be at. We're
            constantly growing. We're constantly making mistakes. We're
            constantly trying to express ourselves and actualize our dreams.
          </div>
        }
        index={2}
      />
      <AccordionItem
        title="Categories"
        content={
          <div>
            {categories.map((product) => (
              <Link
                key={product.id}
                className="flex flex-col bg-stone-400"
                to={`/category/${product.name.toLowerCase()}`}
              >
                {product.name}
              </Link>
            ))}
          </div>
        }
        index={3}
      />
    </div>
  );
};

export default SideBar;
