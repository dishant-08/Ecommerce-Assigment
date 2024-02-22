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
    <section id="category" className="  text-4xl p-12 my-2 mx-auto">
      <div className="text-bgdarkimage font-extrabold text-4xl  ">
        Check now !
      </div>
      <h1 class="my-6 pb-6 text-4xl font-extrabold leading-none tracking-tight text-gray-800 md:text-5xl lg:text-6xl dark:text-white">
        {" "}
        Our Feature Categories
      </h1>
      {/* <div className="text-6xl font-bold mt-6 text-gray-500  mb-6 pb-6">
        Our Feature Categories
      </div> */}
      <div className=" flex flex-wrap justify-center items-center  gap-10 md:gap-2">
        {/* <div className="flex  min-h-screen bg-gray-100"> */}
        {categories
          .filter((category) => category.id < 5)
          .map((product) => (
            <Link
              key={product.id}
              to={`/category/${product.name.toLowerCase()}`}
              className="  "
            >
              {" "}
              <div className=" flex flex-wrap my-5 ">
                <CategoryCard category={product} />
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default Featured;
