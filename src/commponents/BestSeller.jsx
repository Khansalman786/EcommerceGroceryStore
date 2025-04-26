import { useAppContext } from "../context/App_context";
import ProductCard from "./ProductCard";
const BestSeller = () => {
  const { products } = useAppContext();
  return (
    <div className="mt-16">
      <h1 className="text-2xl text-center sm:text-left  md:text-3xl text-gray-800 font-medium">
        Best Seller
      </h1>
      <div className="grid grid-cols-2 justify-items-center gap-5 sm:grid-cols-2 md:grid-cols-4  md:gap-6 lg:grid-cols-5 mt-6">
      {products
          .filter((product) => product.inStock)
          .slice(0, 5)
          .map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
    </div>
  );
};

export default BestSeller;
