// src/pages/CategoryPage.js
import React from "react";
import { Link, useParams } from "react-router-dom";
import ProductList from "../components/ProductList";
import { categories, list } from "../data";
import ProductCard from "../components/CategoryComp/ProductCard";
import { Button } from "../components/Button";
import Star from "../components/CategoryComp/Star";
import SideBar, { AccordionItem } from "../components/CategoryComp/SideBar";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const Products = list
    .filter((categories) => categories.category == categoryId)
    .map((item) => <ProductCard key={item.id} product={item} />);

  return (
    <div>
      <h2>Category Page</h2>
      <h2> {categoryId} </h2>
      {/* <AccordionItem
        title="Top Rated"
        content={
          <div className="flex flex-col justify-center items-center">
            {[5, 4, 3, 2, 1].map((item, index) => (
              <span key={index}> {Star(item)} & Up </span>
            ))}
          </div>
        }
        index={1}
      /> */}
      {/* <ProductList products={products} /> */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2 gap-5 border py-10 ">
          <div className=" flex justify-center items-center ">
            <Button>Clear Filters</Button>
          </div>
          <SideBar />
          {/* <filter>
            <div className="font-bold">Apply Filter</div>
            
            <div> Top Rated </div>
            <div className=" flex flex-col justify-center items-center ">
              {[5, 4, 3, 2, 1].map((item, index) => (
                <span key={index}> {Star(item)} & Up </span>
              ))}
            </div>
            <div> Price(Lowest First) </div>
            <div> Price(Highest First) </div>
          </filter>
          <div>
            {categories.map((product) => (
              <Link
                key={product.id}
                className=" flex flex-col bg-stone-400 "
                to={`/category/${product.name.toLowerCase()}`}
              >
                {product.name}
              </Link>
            ))}
          </div> */}
        </div>

        <div className="col-span-10 border   border-blue-500 ">
          <div className="flex flex-wrap gap-5  ">{Products}</div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
