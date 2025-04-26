import React from "react";
import { assets, categories } from "../assets/assets";
import { useAppContext } from "../context/App_context";

const Category = () => {
  const { navigate } = useAppContext();
  return (
    <div className="mt-16">
      <h1 className="text-xl sm:text-2xl md:text-3xl text-gray-800 font-medium">
        Categories
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6 sm:gap-5 md:gap-6 mt-6">
        {categories.map((item, index) => (
          <div
            onClick={() => {
              navigate(`/product/${item.path.toLowerCase()}`);
            }}
            key={index}
            style={{ background: item.bgColor }}
            className="py-5 sm:py-5 px-3 sm:px-4 rounded-xl shadow-md flex flex-col items-center justify-center  "
          >
            <img
              src={item.image}
              alt="category_image"
              className="w-16 sm:w-20 md:w-24 lg:w-26 mb-3 object-contain hover:scale-110 transition-transform"
            />
            <p className="text-center text-gray-700 text-xs sm:text-sm font-semibold">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
