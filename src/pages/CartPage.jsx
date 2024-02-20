// src/pages/CartPage.js
import React from "react";
import { useCart } from "../context/ProductContext";
import CartCard from "../components/CartComp/CartCard";

const CartPage = () => {
  // Dummy data for demonstration, replace with your logic
  const { cart } = useCart();

  return (
    <div>
      {cart.map((item) => {
        return <CartCard key={item.id} item={item}></CartCard>;
      })}
    </div>
  );
};

export default CartPage;
