import ProductCard from "../commponents/ProductCard";
import { useAppContext } from "../context/App_context";

import React, { useEffect, useState } from "react";

const AllProductPage = () => {
  const { products, searchQuery } = useAppContext();
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      setFilterProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilterProducts(products);
    }
  }, [products, searchQuery]);
  return (
    <div className="mt-16">
      <div className="flex flex-col w-max  items-end">
        <h1 className="text-xl sm:text-2xl md:text-3xl text-gray-800 font-medium">
          All Products
        </h1>
        <div className="h-0.5 bg-green-500 rounded-full w-1/2"></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6">
        {filterProducts
          .filter((product) => product.inStock)
          .map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
    </div>
  );
};

export default AllProductPage;
