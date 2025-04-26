import React from "react";
import { categories } from "../assets/assets";
import { useParams } from "react-router-dom";
import ProductCard from "../commponents/ProductCard";
import { useAppContext } from "../context/App_context";

const ProductCategory = () => {
  const { products } = useAppContext();
  const { category } = useParams();

  const searchCategory = categories.find(
    (item) => item.path.toLowerCase() === category.toLowerCase()
  );
  console.log("Matched category:", searchCategory);
  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === category
  );
  console.log("Filtered Products:", filteredProducts);

  return (
    <div>
      {searchCategory && (
        <div className="mt-16">
          <div className="flex flex-col w-max  items-end">
            <h1 className="text-xl sm:text-2xl md:text-3xl text-gray-800 font-medium mb-1">
              {searchCategory.text.toLowerCase()}
            </h1>
            <div className="h-0.5 bg-green-400 rounded-full w-1/3"></div>
          </div>
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-[60vh]">
              <h1 className="text-2xl md:text-3xl lg:text-4xl text-green-400 font-medium">
                Products Not Found
              </h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductCategory;
