// src/pages/CategoryPage.js
import React from "react";
import { Link, useParams } from "react-router-dom";
import ProductList from "../components/ProductList";
import { categories, list } from "../data";
import ProductCard from "../components/CategoryComp/ProductCard";

const CategoryPage = () => {
  const { categoryId } = useParams();

  return (
    <div>
      <h2>Category Page</h2>
      <h2> {categoryId} </h2>
      {/* <ProductList products={products} /> */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2 border ">
          <filter>
            <div className="font-bold">Apply Filter</div>
            <div> Latest </div>
            <div> Featured </div>
            <div> Top Rated </div>
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
          </div>
        </div>

        <div className="col-span-10 border border-blue-500 ">
          {list
            .filter((categories) => categories.category == categoryId)
            .map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          All products
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
