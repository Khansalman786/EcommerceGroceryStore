import React from "react";
import { assets } from "../assets/assets";

const BottomBanner = () => {
  return (
    <div className="mt-24">
      <div className="relative">
        <div>
          <img
            src={assets.bottom_banner_image}
            alt="bottom_banner"
            className=" hidden md:block w-full"
          />
          <img
            src={assets.bottom_banner_image_sm}
            alt="bottom_banner"
            className="md:hidden w-full"
          />
        </div>

        <div
          className="absolute z-20 sm:top-0 top-[15vw] lg:top-5 xl:top-20 md:right-0 lg:right-5 xl:right-20 w-full md:w-auto
        "
        >
          <h1 className="text-xl  lg:text-2xl xl:text-3xl text-green-600/90   font-medium mb-3 lg:mb-4 xl:mb-6">
            Why We Are the Best?
          </h1>
          <div className="flex gap-3 md:gap-5 mb-3">
            <img
              src={assets.delivery_truck_icon}
              alt="delivery_truck_icon"
              className="w-[38px] lg:w-[40px] xl:[50px]"
            />
            <div>
              <h3 className="text-sm md:text-medium lg:text-[15px] xl:text-xl font-medium  text-gray-900/95">
                Fastest Delivery
              </h3>
              <p className="md:text-sm text-[10px] text-gray-500">
                Groceries delivered in under 30 minutes.
              </p>
            </div>
          </div>
          <div className="flex gap-3 md:gap-5 mb-3">
            <img
              src={assets.leaf_icon}
              className="w-[38px] lg:w-[40px] xl:[50px]"
              alt="leaf_icon"
            />
            <div>
              <h3 className="text-sm md:text-medium lg:text-[15px] xl:text-xl font-medium  text-gray-900/95">
                Freshness Guaranteed
              </h3>
              <p className="md:text-sm text-[10px] text-gray-500">
                Fresh produce straight from the source.
              </p>
            </div>
          </div>
          <div className="flex gap-3 md:gap-5 mb-3">
            <img
              src={assets.coin_icon}
              className="w-[38px] lg:w-[40px] xl:[50px]"
              alt="coin"
            />
            <div>
              <h3 className="text-sm md:text-medium lg:text-[15px] xl:text-xl font-medium text-gray-900/95">
                Affordable Prices
              </h3>
              <p className="md:text-sm text-[10px] text-gray-500">
                Quality groceries at unbeatable prices.
              </p>
            </div>
          </div>
          <div className="flex gap-3 md:gap-5 mb-3">
            <img
              src={assets.trust_icon}
              className="w-[38px] lg:w-[40px] xl:[50px]"
              alt="truct_icon"
            />
            <div>
              <h3 className="text-sm md:text-medium lg:text-[15px] xl:text-xl font-medium text-gray-900/95">
                Trusted by Thousands
              </h3>
              <p className="md:text-sm text-[10px] text-gray-500">
                Loved by 10,000+ happy customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
