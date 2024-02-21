import React, { useEffect } from "react";
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

  useEffect(() => {
    setProducts([]);
    const categoryProducts = list.filter(
      (categories) => categories.category === categoryId
    );
    const filteredProducts = applyFilters(categoryProducts, filters);
    setProducts(filteredProducts);

    // setProducts(categoryProducts);
  }, [categoryId, filters]);

  console.log(products);

  const Products = products.map((item) => (
    <ProductCard key={item.id} product={item} />
  ));

  return (
    <div>
      <h2>Category Page</h2>
      <h2> {categoryId} </h2>

      <div className="grid grid-cols-12 gap-4 min-h-[800px] ">
        <div className="col-span-2 gap-5 border py-10 ">
          <div className="flex justify-center items-center ">
            <div onClick={() => setFilters({ rating: null, price: null })}>
              <Button>Clear Filters</Button>
            </div>
          </div>
          <SideBar />
        </div>

        <div className="col-span-10 border p-10 ">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
            {Products}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
