import { useCart } from "../../context/ProductContext";
import React, { useState } from "react";
import Star from "./Star";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [showModal, setShowModal] = useState(false);
  const { user, logout, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
  // console.log(isAuthenticated);
  const handleAddToCartClick = (e) => {
    e.stopPropagation(); // Stop the event propagation here

    if (isAuthenticated) {
      addToCart(product, product.id);
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      <div
        onClick={() => navigate(`/product/${product.id}`)}
        className="w-full h-[30rem] relative  max-w-[22rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="flex justify-center items-center">
          <img
            className="p-8 h-64 rounded-t-lg hover:scale-105 transition-all duration-300 "
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="px-5 pb-5">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {product.title}{" "}
          </h5>

          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 ">
              {Star(product.rating.rate)}
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
              {product.rating.rate}
            </span>
          </div>
          <div className="flex absolute bottom-8 items-center justify-between pr-10 w-full">
            {/* <div className=""> */}
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${product.price}{" "}
            </span>
            <p
              onClick={handleAddToCartClick}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </p>
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
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
