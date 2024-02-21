import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, useParams } from "react-router-dom";
import { list } from "../data";
import ProductCard from "../components/CategoryComp/ProductCard";
import { Button } from "../components/Button";
import SideBar from "../components/CategoryComp/SideBar";
import { useFilter } from "../context/FilterContext";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const { products, setProducts, filters, setFilters, applyFilters } =
    useFilter();

  const isDesktop = useMediaQuery({ minWidth: 768 });
  const [isSidebarOpen, setSidebarOpen] = useState(isDesktop);

  useEffect(() => {
    setSidebarOpen(isDesktop);
  }, [isDesktop]);

  useEffect(() => {
    setProducts([]);
    const categoryProducts = list.filter(
      (categories) => categories.category === categoryId
    );
    const filteredProducts = applyFilters(categoryProducts, filters);
    setProducts(filteredProducts);
  }, [categoryId, filters, isDesktop]);

  const Products = products.map((item) => (
    <ProductCard key={item.id} product={item} />
  ));

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className="flex p-2 justify-between">
        <div>
          <h2>Category Page</h2>
          <h2>{categoryId}</h2>
        </div>

        {!isDesktop && (
          <button
            className="p-4 text-gray-800 bg-white border border-red-600 rounded-xl"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? "Close Sort Filters" : "Open Sort Filters"}
          </button>
        )}
      </div>

      <div className="grid grid-cols-12 gap-4 min-h-[800px] ">
        <div
          className={`col-span-4 md:col-span-2 z-40  ${
            !isDesktop ? "absolute top-0 py-1 " : " py-10"
          }   bg-white gap-5 border ${isSidebarOpen ? "block" : "hidden"}`}
        >
          <div className="flex justify-center items-center ">
            <div onClick={() => setFilters({ rating: null, price: null })}>
              <Button>Clear Filters</Button>
            </div>
          </div>
          <SideBar />
        </div>

        <div className="col-span-8 md:col-span-10 flex justify-center w-screen border p-10 ">
          <div className="flex flex-wrap gap-6">{Products}</div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
