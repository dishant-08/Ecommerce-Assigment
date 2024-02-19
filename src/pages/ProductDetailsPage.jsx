// src/pages/ProductDetailsPage.js
import React from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";

const ProductDetailsPage = () => {
  const { productId } = useParams();

  // Fetch product details for the selected product from your data source
  const product = {
    id: 1,
    title: "Product 1",
    image: "product1-image.jpg",
    description: "Description 1",
    price: 20.99,
  };

  return (
    <div>
      <h2>Product Details Page</h2>
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductDetailsPage;
