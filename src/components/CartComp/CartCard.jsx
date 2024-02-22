import { useCart } from "../../context/ProductContext";
import React from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";

const CartCard = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useCart();
  const { id, title, image, price, quantity } = item;

  return (
    <div className="w-full flex justify-around px-5 py-2 border rounded-xl shadow-md  border-gray-200 font-light text-gray-500">
      <div className="w-full min-h-[150px] flex justify-around flex-col   lg:flex-row  gap-x-4">
        <img
          src={image}
          className="flex-shrink-0 object-cover  w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
        />

        <div className="w-full">
          <div className="flex flex-col justify-between mb-2">
            <div className="flex items-center justify-between">
              <h1 className="text-[1rem] font-semibold items-center uppercase  max-w-[240px] text-primary hover:underline">
                {title}
              </h1>
              <div className="text-xl text-red-300  cursor-pointer">
                <IoMdClose
                  onClick={() => removeFromCart(id)}
                  className="font-bold text-gray-500 hover:text-red-500 transition"
                />
              </div>
            </div>

            <div className="flex  items-center justify-between gap-x-2 h-[36px]">
              <div className="flex rounded-md bg-white max-w-[100px] text-gray-900 items-center h-full border font-medium">
                <div
                  onClick={() => decreaseAmount(id)}
                  className="flex-1 h-full flex justify-center items-center cursor-pointer"
                >
                  <IoMdRemove />
                </div>
                <div className="h-full flex justify-center items-center px-2">
                  {quantity}
                </div>
                <div
                  onClick={() => increaseAmount(id)}
                  className="flex-1 h-full flex justify-center items-center cursor-pointer"
                >
                  <IoMdAdd />
                </div>
              </div>

              <div className=" text-white font-semibold ">
                $ {price} X {quantity}{" "}
              </div>
              <div className=" text-white font-medium">
                $ {parseFloat(price * quantity).toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
