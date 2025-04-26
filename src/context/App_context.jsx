import { createContext, useContext, useEffect, useState } from "react";
import { Provider } from "react-redux";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";

const MyContext = createContext({});

const MyContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const currency = import.meta.VITE_CURRENCY;

  const [user, setUser] = useState(true);
  const [seller, setSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});

  // Fetch All Products
  const fetchAllProducts = async () => {
    setProducts(dummyProducts);
  };
  
  // Add Products to Cart
  const addToCart = (ItemId) => {
    const cartData = structuredClone(cartItems);
    if (cartData[ItemId]) {
      cartData[ItemId] += 1;
    } else {
      cartData[ItemId] = 1;
    }
    setCartItems(cartData);
    toast.success("Added to cart");
  };

  // Update Products to Cart
  const updateToCart = (ItemId, quantity) => {
    const cartData = structuredClone(cartItems);
    cartData = quantity;
    setCartItems(cartData);
    toast.success("Cart Updated");
  };

  // remove Products to Cart
  const removeToCart = (ItemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[ItemId]) {
      cartData[ItemId] -= 1;
      if (cartData[ItemId] === 0) {
        delete cartData[ItemId];
      }
    }
    setCartItems(cartData);
    toast.success("Remove from Cart");
  };

  useEffect(() => {
    fetchAllProducts();
  }, [products]);
  const value = {
    navigate,
    products,
    user,
    setUser,
    seller,
    setSeller,
    showUserLogin,
    setShowUserLogin,
    updateToCart,
    addToCart,
    removeToCart,
    cartItems,
  };
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export const useAppContext = () => {
  return useContext(MyContext);
};

export default MyContextProvider;
