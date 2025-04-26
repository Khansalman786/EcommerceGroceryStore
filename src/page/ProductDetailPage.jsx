import React from "react";
import { assets } from "../assets/assets";
import ProductCard from "../commponents/ProductCard";
import { useAppContext } from "../context/App_context";

const ProductDetailPage = () => {
  const { products } = useAppContext();
  const product = {
    name: "Casual Shoes",
    category: "Sports",
    price: 100,
    offerPrice: 80,
    rating: 4,
    images: [
      "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage.png",
      "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage2.png",
      "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage3.png",
      "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage4.png",
    ],
    description: [
      "High-quality material",
      "Comfortable for everyday use",
      "Available in different sizes",
    ],
  };
  const [thumbnail, setThumbnail] = React.useState(product.images[0]);

  return (
    product && (
      <div className="mt-16">
        <div className="max-w-6xl w-full px-6">
          <p>
            <span>Home</span> /<span> Products</span> /
            <span> {product.category}</span> /
            <span className="text-green-400"> {product.name}</span>
          </p>

          <div className="flex flex-col md:flex-row gap-16 mt-4">
            <div className="flex gap-3">
              <div className="flex flex-col gap-3">
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => setThumbnail(image)}
                    className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer"
                  >
                    <img src={image} alt={`Thumbnail ${index + 1}`} />
                  </div>
                ))}
              </div>

              <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
                <img src={thumbnail} alt="Selected product" />
              </div>
            </div>

            <div className="text-sm w-full md:w-1/2">
              <h1 className="text-3xl font-medium">{product.name}</h1>

              <div className="flex items-center gap-0.5 mt-1">
                {Array(5)
                  .fill("")
                  .map((_, i) =>
                    product.rating > i ? (
                      <img src={assets.star_icon} alt="start_icon" />
                    ) : (
                      <img src={assets.star_dull_icon} alt="start_icon" />
                    )
                  )}
                <p className="text-base ml-2">({product.rating})</p>
              </div>

              <div className="mt-6">
                <p className="text-gray-500/70 line-through">
                  MRP: ${product.price}
                </p>
                <p className="text-2xl font-medium">
                  MRP: ${product.offerPrice}
                </p>
                <span className="text-gray-500/70">
                  (inclusive of all taxes)
                </span>
              </div>

              <p className="text-base font-medium mt-6">About Product</p>
              <ul className="list-disc ml-4 text-gray-500/70">
                {product.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>

              <div className="flex items-center mt-10 gap-4 text-base">
                <button className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition">
                  Add to Cart
                </button>
                <button className="w-full py-3.5 cursor-pointer font-medium bg-green-400 text-white hover:bg-green-500 transition">
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-18 pb-18">
          <h1 className="text-xl sm:text-2xl md:text-3xl text-center text-gray-800 font-medium">
            Related Products
          </h1>
          <div className="flex justify-center mt-2 pb-3">
            <hr className="w-30 text-green-500 h-0.5 rounded-full border-t-3" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6">
            {products
              .filter((product) => product.inStock)
              .slice(0, 5)
              .map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
          </div>
        </div>
        <div className="flex justify-center pb-24">
          <button className="px-12 py-2.5 cursor-pointer font-sm bg-green-50 text-green-500 border-1 rounded border-green-400 hover:bg-green-100 transition">
            See More
          </button>
        </div>
      </div>
    )
  );
};

export default ProductDetailPage;
