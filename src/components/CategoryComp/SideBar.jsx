import React, { useState } from "react";
import Star from "./Star";
import { categories } from "../../data";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useFilter } from "../../context/FilterContext";

export const AccordionItem = ({ title, content, index }) => {
  const [isOpen, setIsOpen] = useState(true);

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
  const {
    products,
    setProducts,
    ascSort,
    descSort,
    filters,
    setFilters,
    popularAscSort,
    popularDescSort,
    sort,
    setSort,
  } = useFilter();
  const [slider, setSlider] = useState();

  const priceOptions = ["300", "200", "100"];

  const [selectedPrice, setSelectedPrice] = useState(null);
  // console.log(selectedPrice);
  const [selectedRating, setSelectedRating] = useState(null);
  console.log(filters);
  // const [selectedPrice, setSelectedPrice] = useState(null);

  const handleRatingChange = (rating) => {
    setFilters({ ...filters, rating });
    setSelectedRating(rating);
  };

  const handlePriceChange = (price) => {
    setFilters({ ...filters, price });
    setSelectedPrice(price);
    // Add any additional logic you need here
  };
  console.log(slider);
  return (
    <div>
      <AccordionItem
        title="Categories"
        content={
          <div>
            {categories.map((product) => (
              <Link
                key={product.id}
                className="flex flex-col items-center p-1 text-xl border"
                to={`/category/${product.name.toLowerCase()}`}
              >
                {product.name}
              </Link>
            ))}
          </div>
        }
        index={1}
      />
      <AccordionItem
        title="Top Rated"
        content={
          <div className="flex flex-col  items-center">
            {[4, 3, 2, 1].map((item, index) => (
              <label className="flex" key={index}>
                <input
                  type="radio"
                  name="rating"
                  value={item}
                  checked={filters.rating === item}
                  onChange={() => handleRatingChange(item)}
                />
                <div className="flex items-center my-1 ">
                  <span>{Star(item, true)} </span>
                  <span>& Up</span>
                </div>
              </label>
            ))}
          </div>
        }
        index={2}
      />
      <AccordionItem
        title=" Filter "
        content={
          <div className=" flex  flex-col  items-center p-1 text-xl ">
            <div
              onClick={() => {
                ascSort();
                setSort({
                  priceAsc: true,
                  priceDesc: false,
                  popularAsc: false,
                  popularDesc: false,
                });
              }}
              className={`px-4 py-1 text-xl font-semibold  ${
                sort.priceAsc ? "bg-red-500 text-white" : ""
              }  text-blue-gray-500/80 `}
            >
              Price (Low to High)
            </div>
            <div
              onClick={() => {
                descSort();
                setSort({
                  priceAsc: false,
                  priceDesc: true,
                  popularAsc: false,
                  popularDesc: false,
                });
              }}
              className={`px-4 py-1 text-xl font-semibold  ${
                sort.priceDesc ? "bg-red-500 text-white" : ""
              }  text-blue-gray-500/80 `}
            >
              Price ( High to Low)
            </div>
            <div
              onClick={() => {
                popularAscSort();
                setSort({
                  priceAsc: false,
                  priceDesc: false,
                  popularAsc: true,
                  popularDesc: false,
                });
              }}
              className={`px-4 py-1 text-xl font-semibold  ${
                sort.popularAsc ? "bg-red-500 text-white" : ""
              }  text-blue-gray-500/80 `}
            >
              Popularity ( Low to High)
            </div>
            <div
              onClick={() => {
                popularDescSort();
                setSort({
                  priceAsc: false,
                  priceDesc: false,
                  popularAsc: false,
                  popularDesc: true,
                });
              }}
              className={`px-4 py-1 text-xl font-semibold  ${
                sort.popularDesc ? "bg-red-500 text-white" : ""
              }  text-blue-gray-500/80 `}
            >
              Popularity ( High to Low)
            </div>
          </div>
        }
        index={3}
      />
      <AccordionItem
        title="Price Filter"
        content={
          <div className="flex flex-col items-center p-1 text-xl">
            {priceOptions.map((price, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name="price"
                  value={price}
                  checked={filters.price === price}
                  onChange={() => handlePriceChange(price)}
                />
                Under ${price}
              </label>
            ))}
          </div>
        }
        index={4}
      />
    </div>
  );
};

export default SideBar;
