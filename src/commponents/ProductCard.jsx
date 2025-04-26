import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/App_context";
const ProductCard = ({ product }) => {
  const { navigate, cartItems, addToCart, updateToCart, removeToCart } =
    useAppContext();
  const [count, setCount] = useState(0);

  return (
    product && (
      <div className="border border-gray-500/20 rounded-md md:px-4 px-3 py-8 bg-white min-w-35  sm:min-w-40 max-w-56 w-full">
        <div className="group cursor-pointer flex items-center justify-center px-2">
          <img
            className="group-hover:scale-105 transition max-w-26 md:max-w-36"
            src={product.image[0]}
            alt={product.name}
          />
        </div>
        <div className="text-gray-500/60 text-sm">
          <p>{product.category}</p>
          <p className="text-gray-700 font-medium text-lg truncate w-full">
            {product.name}
          </p>
          <div className="flex items-center gap-0.5">
            {Array(5)
              .fill("")
              .map((_id, i) =>
                product.rating > i ? (
                  <img key={i} src={assets.star_icon} alt="star_icon" />
                ) : (
                  <img key={i} src={assets.star_dull_icon} alt="star_dull" />
                )
              )}
            <p>(4)</p>
          </div>
          <div className="flex items-end justify-between mt-3">
            <div className="sm:flex flex-col md:text-xl text-base font-medium text-green-500 lg:block">
              ${product.offerPrice}{" "}
              <span className="text-gray-500/60 md:text-sm text-xs line-through">
                ${product.price}
              </span>
            </div>
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="text-green-400"
            >
              {!cartItems[product._id] ? (
                <button
                  className="flex items-center justify-center gap-1 bg-green-100 border border-green-300 md:w-[80px] w-[64px] h-[34px] rounded text-green-400 font-medium cursor-pointer"
                  onClick={() => {
                    addToCart(product._id);
                    console.log(product._id);
                  }}
                >
                  <img src={assets.cart_icon} alt="cart_icon" />
                  Add
                </button>
              ) : (
                <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] bg-indigo-500/25 rounded select-none">
                  <button
                    onClick={() => removeToCart(product._id)}
                    className="cursor-pointer text-md px-2 h-full"
                  >
                    -
                  </button>
                  <span className="w-5 text-center">
                    {cartItems[product._id]}
                  </span>
                  <button
                    onClick={() => addToCart(product._id)}
                    className="cursor-pointer text-md px-2 h-full"
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductCard;
