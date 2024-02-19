// src/App.js
import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import Header from "./components/HomeComp/Header";
import Footer from "./components/Footer";

const jio = createBrowserRouter([
  {
    path: "/cart",
    element: <CartPage />,
  },
]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/category/:categoryId",
    element: <CategoryPage />,
  },
  {
    path: "/product/:productId",
    element: <ProductDetailsPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={jio} />;
      <Header />
      <RouterProvider router={router} />;
      <Footer />
    </>
  );
};

export default App;
