// src/pages/ProductDetailsPage.js
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { list } from "../data";
import Star from "../components/CategoryComp/Star";
import { useCart } from "../context/ProductContext";
import { useAuth0 } from "@auth0/auth0-react";

const ProductDetailsPage = () => {
  const { addToCart } = useCart();
  const { productId } = useParams();

  const product = list.filter((item) => item.id == productId);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const { user, logout, isAuthenticated, isLoading } = useAuth0();
  const discountedPrice = product[0].price;
  const originalPriceRef = useRef(
    discountedPrice + Math.random().toFixed(2) * 100 + 100
  );
  // console.log(originalPriceRef);

  const discountPercentage = Math.round(
    ((originalPriceRef.current - discountedPrice) / originalPriceRef.current) *
      100
  );

  console.log(product[0]);

  const handleAddToCartClick = () => {
    if (isAuthenticated) {
      addToCart(product[0], product[0].id);
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      <section className="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
        <div className="max-w-4xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 md:w-1/2 ">
              <div className="sticky top-0 z-50 overflow-hidden ">
                <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                  <img
                    src={product[0].image}
                    alt
                    className="object-cover w-full lg:h-full "
                  />
                </div>
                <div className="flex-wrap hidden md:flex ">
                  <div className="w-1/2 p-2 sm:w-1/4">
                    <a
                      href="#"
                      className="block border border-blue-300 dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300"
                    >
                      <img
                        src="https://www.bajajmall.in/emistore/media/catalog/product/placeholder/default/image-not-available_Edit.png"
                        alt
                        className="object-cover w-full lg:h-20"
                      />
                    </a>
                  </div>
                  <div className="w-1/2 p-2 sm:w-1/4">
                    <a
                      href="#"
                      className="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300"
                    >
                      <img
                        src="https://www.bajajmall.in/emistore/media/catalog/product/placeholder/default/image-not-available_Edit.png"
                        alt
                        className="object-cover w-full lg:h-20"
                      />
                    </a>
                  </div>
                  <div className="w-1/2 p-2 sm:w-1/4">
                    <a
                      href="#"
                      className="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300"
                    >
                      <img
                        src="https://www.bajajmall.in/emistore/media/catalog/product/placeholder/default/image-not-available_Edit.png"
                        alt
                        className="object-cover w-full lg:h-20"
                      />
                    </a>
                  </div>
                  <div className="w-1/2 p-2 sm:w-1/4">
                    <a
                      href="#"
                      className="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300"
                    >
                      <img
                        src="https://www.bajajmall.in/emistore/media/catalog/product/placeholder/default/image-not-available_Edit.png"
                        alt
                        className="object-cover w-full lg:h-20"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 ">
              <div className="lg:pl-20">
                <div className="mb-8 ">
                  <nav className="flex" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                      <li className="inline-flex items-center">
                        <a
                          href="#"
                          className="inline-flex items-center text-md font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                        >
                          <svg
                            className="w-3 h-3 me-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                          </svg>
                          Category Page
                        </a>
                      </li>
                      <li>
                        <div className="flex items-center">
                          <svg
                            className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                          <Link
                            to={`/category/${product[0].category}`}
                            className="ms-1 text-md capitalize font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                          >
                            {product[0].category}
                          </Link>
                        </div>
                      </li>
                    </ol>
                  </nav>

                  <h2 className="max-w-xl mt-2 mb-6 text-xl font-bold dark:text-gray-400 md:text-4xl">
                    {product[0].title}
                  </h2>

                  <button
                    type="button"
                    onClick={() => navigate(`/category/${product[0].category}`)}
                    className="px-8 py-1 mb-4 text-white capitalize font-semibold bg-gray-800 rounded-full dark:bg-gray-100 dark:text-gray-800"
                  >
                    {product[0].category}{" "}
                  </button>
                  <div className="flex items-center mb-6">
                    {Star(product[0].rating.rate)}
                    <p className="text-xs dark:text-gray-400 ">
                      ( {product[0].rating.count} customer reviews)
                    </p>
                  </div>
                  <p className="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                    {product[0].description}
                  </p>
                  <div className="flex items-center   ">
                    <p className="inline-block  text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                      <span>$ {discountedPrice}</span>
                      <span className="text-base font-normal text-gray-500 mx-1 line-through dark:text-gray-400">
                        $ {originalPriceRef.current}
                      </span>
                    </p>
                    <p className="text-green-600 dark:text-green-300 ">
                      {discountPercentage}% off
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center -mx-4 ">
                  <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                    <button
                      onClick={handleAddToCartClick}
                      className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300"
                    >
                      Add to Cart
                    </button>
                    {showModal ? (
                      <>
                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                          <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                              {/*header*/}
                              <div className="flex items-start justify-between p-5  rounded-t">
                                <h3 className="text-3xl font-semibold">
                                  Please Login with Your Account
                                </h3>
                              </div>

                              <div className="flex items-center justify-center p-4  rounded-b">
                                <button
                                  className="text-white bg-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setShowModal(false);
                                  }}
                                >
                                  Okay
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                      </>
                    ) : null}
                  </div>
                  <div className="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
                    <button
                      onClick={() => navigate("/cart")}
                      className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsPage;
