import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const MainBanner = () => {
  return (
    <div className="relative mt-10">
      <img
        src={assets.main_banner_bg}
        alt="banner"
        className="hidden md:block w-full"
      />
      <img
        src={assets.main_banner_bg_sm}
        alt="banner"
        className="md:hidden w-full"
      />
      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl  text-gray-700  font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-125 leading-tight lg:leading-15 ">
          Freshness You Can Trust, Savings You will Love!
        </h1>
        <div className="flex items-center mt-6 font-medium">
          <Link
            to={"/products"}
            className="group flex items-center gap-2 px-7 md:px-9 py-3 bg-green-400 hover:bg-green-500 transition rounded text-white cursor-pointer "
          >
            Shop Now
            <img
              src={assets.white_arrow_icon}
              alt="arrow"
              className="md:hidden transition group-focus:translate-x-1"
            />
          </Link>
          <Link
            to={"/products"}
            className="group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer text-gray-800 "
          >
            Explore deals
            <img
              src={assets.black_arrow_icon}
              alt="arrow"
              className="transition group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
