import React, { createContext, useContext, useEffect, useState } from "react";

export const FilterContext = createContext();

const FilterProvider = () => {
  const [products, setProducts] = useState([]);
  const ascSort = () => {
    setProducts(products.sort((a, b) => a.price - b.price));
  };
  return (
    <FilterContext.Provider
      value={{ products, setProducts }}
    ></FilterContext.Provider>
  );
};

export default FilterProvider;
