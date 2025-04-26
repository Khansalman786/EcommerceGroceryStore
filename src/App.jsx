import "./App.css";
import Footer from "./commponents/Footer";
import Navbar from "./commponents/Navbar";
import AllProductPage from "./page/AllProductPage";
import HomePage from "./page/HomePage";
import { Routes, Route, useLocation } from "react-router-dom";
import ProductDetailPage from "./page/ProductDetailPage";
import CartPage from "./page/CartPage";
import SideBar from "./page/seller/SideBar";
import { Toaster } from "react-hot-toast";
import Login from "./commponents/Login";
import { useAppContext } from "./context/App_context";
import ProductCategory from "./page/ProductCategory";

function App() {
  const { showUserLogin } = useAppContext();
  const isSellerPath = useLocation().pathname.includes("seller");
  return (
    <>
      {!isSellerPath ? <Navbar /> : <SideBar />}
      {showUserLogin && <Login />}
      <Toaster />
      <div className={isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<AllProductPage />} />
          <Route path="/product/id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:category" element={<ProductCategory />} />
        </Routes>
      </div>
      {!isSellerPath && <Footer />}
    </>
  );
}

export default App;
