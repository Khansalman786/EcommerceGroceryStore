import ProductCard from "../commponents/ProductCard";
import { useAppContext } from "../context/App_context";

import React from "react";

const AllProductPage = () => {
  const { products } = useAppContext();
  return (
    <div className="mt-16">
      <h1 className="text-xl sm:text-2xl md:text-3xl text-gray-800 font-medium">
        All Products
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProductPage;
