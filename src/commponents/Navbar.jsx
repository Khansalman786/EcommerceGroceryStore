import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { useAppContext } from "../context/App_context";

const Navbar = () => {
  const {
    user,
    setUser,
    navigate,
    setShowUserLogin,
    searchQuery,
    setSearchQuery,
  } = useAppContext();
  const [open, setOpen] = useState(false);

  const logout = () => {
    setUser(false);
    navigate("/");
  };

  useEffect(() => {
    if (searchQuery.length > 0) {
      navigate("/products");
    }
  }, [searchQuery]);
  return (
    <nav className=" relative flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white transition-all">
      <Link to="/">
        <img className="h-9" src={assets.logo} alt="logo" />
      </Link>
      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">All Products</NavLink>

        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-6 rounded-full">
          <input
            onChange={(e) => {
              setSearchQuery(e.target.value)
              console.log(e.target.value)}}
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
          />
          <img src={assets.search_icon} alt="search_icon" className="w-5" />
        </div>

        {/* Cart Icon */}
        <Link to={"/cart"} className="relative cursor-pointer">
          <img
            src={assets.nav_cart_icon}
            alt="cart_icon"
            className="w-5 md:w-6 opacity-75"
          />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-green-400 w-[18px] h-[18px] rounded-full">
            3
          </button>
        </Link>

        {!user ? (
          <button
            onClick={() => setShowUserLogin(true)}
            className="cursor-pointer px-8 py-2 bg-green-400 hover:bg-green-500 transition text-white rounded-full"
          >
            Login
          </button>
        ) : (
          <div className="relative group">
            <img
              src={assets.profile_icon}
              alt="loggin_img"
              className="w-8 md:w-10"
            />
            <ul className="hidden group-hover:block absolute top-10 right-0 shadow-sm bg-white w-35 py-2.5 border border-gray-200 text-sm transition z-40 rounded">
              <li
                onClick={() => navigate("my-order")}
                className="text-gray-500 cursor-pointer hover:bg-green-200 py-1 pl-2"
              >
                My Orders
              </li>
              <li
                onClick={logout}
                className="text-gray-500 cursor-pointer hover:bg-green-200 py-1 pl-2"
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="flex gap-8 sm:hidden">
        <Link to={"/cart"} className="relative cursor-pointer">
          <img
            src={assets.nav_cart_icon}
            alt="cart_icon"
            className="w-4.5 opacity-75"
          />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-green-400 w-[14px] h-[14px] rounded-full">
            3
          </button>
        </Link>
        <button
          onClick={() => (open ? setOpen(false) : setOpen(true))}
          aria-label="Menu"
          className="sm:hidden"
        >
          {/* Menu Icon SVG */}
          <img src={assets.menu_icon} alt="menu_icons" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute z-50 top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
      >
        <Link to="/" className="block">
          Home
        </Link>
        <Link to="/products" className="block">
          All Products
        </Link>
        {!user && (
          <Link href="/orders" className="block">
            My Orders
          </Link>
        )}
        <Link href="/" className="block">
          Contact
        </Link>
        {!user ? (
          <button
            onClick={() => {
              setOpen(false);
              setShowUserLogin(true);
            }}
            className="cursor-pointer px-6 py-2 mt-2 bg-green-400 hover:bg-green-500 transition text-white rounded-full text-sm"
          >
            Login
          </button>
        ) : (
          <button
            onClick={logout}
            className="cursor-pointer px-6 py-2 mt-2 bg-green-400 hover:bg-green-500 transition text-white rounded-full text-sm"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
