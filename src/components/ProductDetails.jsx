// src/components/ProductDetails.js
import React from "react";
import { Link } from "react-router-dom";

const ProductDetails = ({ product }) => {
  // Implement the detailed product view
  return (
    <div>
      <img src={product.image} alt={product.title} />
      <p>{product.title}</p>
      <p>{product.description}</p>
      <p>${product.price}</p>
      {/* Add more details */}
      <Link to="/cart">Add to Cart</Link>
      <Link to="/wishlist">Add to Wishlist</Link>
    </div>
  );
};

export default ProductDetails;
