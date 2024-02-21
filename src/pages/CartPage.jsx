import React from "react";

import { useCart } from "../context/ProductContext";
import CartCard from "../components/CartComp/CartCard";

// const EmptyCartSVG = () => (

// );

const CartPage = () => {
  const { cart, total } = useCart();

  return (
    <div>
      {cart.length === 0 ? (
        <div className="flex items-center justify-center min-h-80">
          <p className="ml-2 text-xl font-semibold text-gray-500">
            Your cart is empty.
          </p>
        </div>
      ) : (
        <div className="flex flex-col md:p-10 ">
          <div className=" m-10 ">
            {cart.map((item) => (
              <div className=" m-2 ">
                <CartCard key={item.id} item={item} />
              </div>
            ))}
          </div>
          <div className="space-y-1 flex flex-col items-center md:items-end md:text-right ">
            <p className=" md:mr-10 text-2xl ">
              Total amount:
              <span className="font-semibold"> ${total.toFixed(2)} </span>
            </p>
            <p className="text-sm md:mr-8 dark:text-gray-400">
              Not including taxes and shipping costs
            </p>
          </div>
          <div className="flex justify-center my-5 md:justify-end space-x-4">
            <button
              type="button"
              className="px-6 py-2 border rounded-md dark:border-violet-400"
            >
              Back
              <span className="sr-only sm:not-sr-only">to shop</span>
            </button>
            <button
              type="button"
              className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400"
            >
              <span className="sr-only sm:not-sr-only">Continue to</span>
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
