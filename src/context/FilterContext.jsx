import React, { createContext, useContext, useState } from "react";

export const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ rating: null, price: null });
  const [sort, setSort] = useState({
    priceAsc: false,
    priceDesc: false,
    popularAsc: false,
    popularDesc: false,
  });

  const ascSort = () => {
    setProducts([...products].sort((a, b) => a.price - b.price));
  };
  const descSort = () => {
    setProducts([...products].sort((a, b) => b.price - a.price));
  };
  const popularAscSort = () => {
    setProducts([...products].sort((a, b) => a.rating.rate - b.rating.rate));
  };
  const popularDescSort = () => {
    setProducts([...products].sort((a, b) => b.rating.rate - a.rating.rate));
  };

  const applyFilters = (categoryProducts, filters) => {
    // Apply existing filters to the products
    let filteredProducts = [...categoryProducts];
    console.log(filteredProducts);

    // Apply rating filter
    if (filters.rating !== null) {
      filteredProducts = filteredProducts.filter(
        (product) => product.rating.rate >= filters.rating
      );
    }

    // Apply price filter
    if (filters.price !== null) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= filters.price
      );
    }

    return filteredProducts;
  };

  return (
    <FilterContext.Provider
      value={{
        products,
        setProducts,
        ascSort,
        descSort,
        filters,
        setFilters,
        applyFilters,
        sort,
        setSort,
        popularAscSort,
        popularDescSort,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;

const useFilter = () => useContext(FilterContext);

export { useFilter };
