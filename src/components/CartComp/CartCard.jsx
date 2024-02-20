import { useCart } from "../../context/ProductContext";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
const CartCard = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useCart();
  const { id, title, image, price, quantity } = item;

  return (
    <div className="w-full gap-x-4 py-2 lg:px-6 border-b border-gray-200 font-light text-gray-500">
      <div className="w-full min-h-[150px] flex flex-col lg:flex-row items-center gap-x-4">
        <img
          src={image}
          className="max-w-[80px] lg:max-w-[100px] mb-4 lg:mb-0"
        />

        <div className="w-full">
          <div className="w-full flex flex-col lg:flex-row justify-between mb-2">
            <h1 className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline">
              {title}
            </h1>

            <div className="text-xl cursor-pointer">
              <IoMdClose
                onClick={() => removeFromCart(id)}
                className="font-bold text-gray-500 hover:text-red-500 transition"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-x-2 h-[36px]">
            <div className="flex lg:flex-1 max-w-[100px] text-gray-900 items-center h-full border font-medium">
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

            <div className="mb-2 lg:mb-0">$ {price}</div>
            <div className="font-medium">
              $ {parseFloat(price * quantity).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
