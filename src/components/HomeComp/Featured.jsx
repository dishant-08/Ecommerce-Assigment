import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { Link } from "react-router-dom";
import { categories } from "../../data";
// import { useProductContext } from '../context/productcontext';
// import Product from './Product';

const Featured = () => {
  //   const { isLoading, featureProducts } = useProductContext();
  // const [categories, setCategories] = useState([]);

  // const getAllCategories = async () => {
  //   try {
  //     const res = await fetch("https://api.escuelajs.co/api/v1/categories");
  //     const data = await res.json();
  //     setCategories(data);
  //     // console.log(data[0]);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   getAllCategories();
  // }, []);

  //   if (isLoading) {
  //     return <div>Loading...</div>;
  //   }

  return (
    <section className=" bg-gradient-to-t from-pink-300 via-gray-400 to-gray-500 text-4xl p-12 my-12 mx-auto">
      <div className="text-red-600 font-extrabold text-4xl  ">Check now !</div>
      <div className="text-6xl font-bold mt-6  mb-6 pb-6">
        Our Feature Categories
      </div>
      <div className="grid grid-cols-1  md:grid-cols-4 gap-10 md:gap-2">
        {/* <div className="flex justify-center items-center min-h-screen bg-gray-100"> */}
        {categories
          .filter((category) => category.id < 5)
          .map((product) => (
            <Link
              key={product.id}
              to={`/category/${product.name.toLowerCase()}`}
            >
              <CategoryCard category={product} />
            </Link>
          ))}
      </div>
    </section>
  );
};

export default Featured;
