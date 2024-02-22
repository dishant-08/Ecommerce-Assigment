import React, { useEffect } from "react";
import { useCart } from "../context/ProductContext";
import CartCard from "../components/CartComp/CartCard";

const CartPage = () => {
  const { cart, total, setCart } = useCart();

  // useEffect to get cart data from localStorage on component mount
  // useEffect(() => {
  //   const storedCart = localStorage.getItem("cartko");
  //   if (storedCart && storedCart.length !== 0) {
  //     setCart(JSON.parse(storedCart));
  //   }
  // }, [setCart]);

  // // useEffect to store cart data in localStorage when cart changes
  // useEffect(() => {
  //   localStorage.setItem("cartko", JSON.stringify(cart));
  // }, [cart]);

  // // Function to clear the cart and localStorage
  const clearCart = () => {
    // localStorage.removeItem("cartko");
    setCart([]);
  };

  // Function to handle checkout
  const handleCheckout = () => {
    // Add your checkout logic here
    console.log("Checkout functionality goes here");
  };

  return (
    <div>
      {cart.length === 0 ? (
        <div className="flex items-center justify-center min-h-80">
          <p className="ml-2 text-xl font-semibold text-gray-500">
            Your cart is empty.
          </p>
        </div>
      ) : (
        <div className="flex flex-col md:p-10">
          <div className="m-10">
            {cart.map((item) => (
              <div className="m-2" key={item.id}>
                <CartCard item={item} />
              </div>
            ))}
          </div>
          <div className="space-y-1 flex flex-col items-center md:items-end md:text-right">
            <p className="md:mr-10 text-2xl">
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
              onClick={() => clearCart()}
              className="px-6 py-2 border rounded-md dark:border-violet-400"
            >
              Clear Cart
            </button>
            <button
              type="button"
              onClick={() => handleCheckout()}
              className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400"
            >
              Continue to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
