// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import {
//   Routes,
//   Route,
//   createBrowserRouter,
//   RouterProvider,
//   Router,
// } from "react-router-dom";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";

import Footer from "./components/Footer";
import CartProvider from "./context/ProductContext";
import bgImage from "../src/assets/bgimage.jpg";
import FilterProvider from "./context/FilterContext";
import Header from "./components/Header";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/category/:categoryId",
//     element: <CategoryPage />,
//   },
//   {
//     path: "/product/:productId",
//     element: <ProductDetailsPage />,
//   },
//   {
//     path: "/cart",
//     element: <CartPage />,
//   },
// ]);

const App = () => {
  return (
    <>
      <FilterProvider>
        <CartProvider>
          <Router>
            {/* <RouterProvider router={router} />;
             */}

            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:categoryId" element={<CategoryPage />} />
              <Route
                path="/product/:productId"
                element={<ProductDetailsPage />}
              />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
            <Footer />
          </Router>
        </CartProvider>
      </FilterProvider>
    </>
  );
};

export default App;
